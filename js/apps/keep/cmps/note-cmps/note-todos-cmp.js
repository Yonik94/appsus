import { keepService } from '../../services/keep-service.js';
import { eventBus } from '../../../../services/event-bus-service.js';
import controllerBtns from './controller-btns-cmp.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
        `<article>
            <h4 @blur="updateNote($event ,'title')" contenteditable="true">{{ note.title }}</h4>
            <ul>
            <li v-for="(todo, idx) in note.info.todos" :key="todo.txt" class="clean-list"> 
            <input v-model="todo.isDone" @input="updateNote" type="checkbox">
                <label @blur="updateNote($event, 'txt', idx)" :class="{cross: todo.isDone}" contenteditable="true">{{ todo.txt }}</label>
                <button>X</button>
            </li>
            </ul>
            <controller-btns></controller-btns>
    </article>`,
    components: {
        controllerBtns
    },
    methods: {
        updateNote(ev, elType, idx) {
            if (elType) {
                const value = ev.target.innerHTML;
                if (idx >= 0) {
                    this.note.info.todos[idx].txt = value;
                    this.validateTodoTxt(value, idx);
                } else {
                    this.note[elType] = value;
                }

                keepService.updateNote(this.note)
                    .then(() => {
                        eventBus.$emit('updateNotes');
                    });
            }
            else {
                setTimeout(() => keepService.updateNote(this.note), 0);
            }
        },
        validateTodoTxt(txt, idx) {
            if (txt === '') this.note.info.todos.splice(idx, 1)
        }
    }
}