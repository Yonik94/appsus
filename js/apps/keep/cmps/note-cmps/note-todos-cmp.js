import { keepService } from '../../services/keep-service.js';
import controllerBtns from './controller-btns-cmp.js';
import { utilsService } from '../../../../services/utils-service.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
    `<article :style="{ backgroundColor: note.style.backgroundColor }">
        <h4 @blur="updateNote($event ,'title')" contenteditable="true" data-ph="Insert title">{{ note.title }}</h4>

        <ul class="clean-list">
            <li>
                <i class="far fa-plus-square"></i>
                <input v-model="newTodoLineTxt" @keyup.enter="addTodoLine" @blur="addTodoLine" ref="inputNewTodo"
                    placeholder="Insert item" type="text" class="bg-transparent no-border" />
            </li>

            <li v-for="(todo, idx) in note.info.todos" :key="todo.todoId"> 
            <input v-model="todo.isDone" @input="updateNote" type="checkbox">
                <label :tabindex="idx" @blur="updateNote($event, 'txt', idx)" :class="{cross: todo.isDone}"
                    @keydown.enter.prevent="splitTodoLine($event, idx)" contenteditable="true" tabindex="idx">{{ todo.txt }}</label>
                <button @click="deleteTodoLine(idx)"><i class="fas fa-times"></i></button>
            </li>
        </ul>

        <controller-btns @deleteNote="deleteNote"></controller-btns>
    </article>`,
    data() {
        return {
            newTodoLineTxt: ''
        }
    },
    components: {
        controllerBtns
    },
    methods: {
        updateNote(ev, elType, idx) {
            console.log({ev, elType, idx});
            if (!elType) {
                setTimeout(() => keepService.updateNote(this.note), 0);
            } else {
                const value = ev.target.innerText;
                if (idx >= 0) {
                    this.note.info.todos[idx].txt = value;
                    if (value === '') this.deleteTodoLine(idx, false);
                } else {
                    this.note[elType] = value;
                }
            }
            this.$emit('updateNote', this.note);
        },
        deleteTodoLine(idx, dataBind = true) {
            this.note.info.todos.splice(idx, 1);
            if (dataBind) this.$emit('updateNote', this.note);
        },
        addTodoLine() {
            if (this.newTodoLineTxt === '') return;
            const newTodo = {
                txt: this.newTodoLineTxt,
                isDone: false,
                todoId: utilsService.getRandomId()
            }
            this.newTodoLineTxt = '';
            this.note.info.todos.unshift(newTodo);
            this.$emit('updateNote', this.note);
        },
        splitTodoLine(ev, idx) {
            const carretIdx = utilsService.getCaretPosition(ev.target);
            const txtAfterCaret = ev.target.innerText.slice(carretIdx);
            const txtBeforeCaret = ev.target.innerText.substring(0, carretIdx);

            if (!txtAfterCaret || !txtBeforeCaret) {
                this.$refs['inputNewTodo'].focus();
                return;
            }

            this.note.info.todos[idx].txt = txtBeforeCaret;

            const newTodo = {
                txt: txtAfterCaret,
                isDone: false,
                todoId: utilsService.getRandomId()
            }
            this.note.info.todos.splice(idx + 1, 0, newTodo);
            this.$emit('updateNote', this.note);

            setTimeout(() => ev.target.parentElement.nextElementSibling.children[1].focus(), 0)
        },
        deleteNote() {
            
        }
    }
}