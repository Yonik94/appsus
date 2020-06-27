import { keepService } from '../../services/keep-service.js';
import controllerBtns from './controller-btns-cmp.js';
import { utilsService } from '../../../../services/utils-service.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
        `<article class="note" :style="{ backgroundColor: note.style.backgroundColor }">
            <button><i class="fas fa-thumbtack"></i></button>
            <h4 @blur="updateNote($event ,'title')" @keydown.116="updateNote($event ,'title')"
                contenteditable="true" data-ph="Title" class="inline">{{ note.title }}</h4>

            <ul class="clean-list">
                <li>
                    <i class="far fa-plus-square"></i>
                    <input v-model="newTodoLineTxt" @keyup.enter="addTodoLine" @blur="addTodoLine" ref="inputNewTodo"
                        placeholder="Insert item" type="text" class="bg-transparent no-border" />
                </li>

                <li v-for="(todo, idx) in note.info.todos" :key="todo.todoId"> 
                    <input v-model="todo.isDone" @input="updateNote" type="checkbox" tabindex="-1">
                    <label @blur="updateNote($event, 'txt', idx)" @keydown.enter.prevent="splitTodoLine($event, idx)"
                        :class="{cross: todo.isDone}" @keydown.116="updateNote($event, 'txt', idx)" contenteditable="true">{{ todo.txt }}</label>
                    
                    <button @click="deleteTodoLine(idx)" tabindex="-1">
                        <i class="fas fa-times"></i>
                    </button>
                </li>
            </ul>          
            <controller-btns @deleteNote="deleteNote"  @duplicateNote="duplicateNote"></controller-btns>
        </article>`,
    // <button v-if="idx !== 0" @click="moveTodoLine(idx, -1)"><i class="fas fa-chevron-up"></i></button>
    // <button v-if="idx !== note.info.todos.length - 1" @click="moveTodoLine(idx, 1)"><i class="fas fa-chevron-down"></i></button>
    data() {
        return {
            newTodoLineTxt: '',
            // note: null
        }
    },
    // created() {
    //     this.note = this.initialNote;
    // },
    components: {
        controllerBtns
    },
    // watch: {
    //     note: {
    //       handler() {
    //         console.log('WATCHED')
    //       },
    //       deep: true,
    //       immediate: true,
    //     }
    // },
    methods: {
        updateNote(ev, elType, idx) {
            console.log({ev, elType, idx})
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
        moveTodoLine(idx, diff) {
            var currTodoLine = this.note.info.todos[idx];
            var nextTodoLine = this.note.info.todos[idx + diff];
            this.note.info.todos[idx] = nextTodoLine;
            this.note.info.todos[idx + diff] = currTodoLine;

            this.$emit('updateNote', this.note);
            console.log(this.note)
        },
        deleteNote() {
            this.$emit('deleteNote', this.note.noteId)
        },
        duplicateNote() {
            this.$emit('duplicateNote', this.note)
        },
    }
}