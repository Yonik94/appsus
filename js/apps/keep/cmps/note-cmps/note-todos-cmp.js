import controllerBtns from './controller-btns-cmp.js';
import { keepService } from '../../services/keep-service.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
        `<article>
            <h4 @blur="updateNote($event ,'title')" contenteditable="true">{{ note.title }}</h4>
            <ul>
            <li v-for="(todo, idx) in note.info.todos" class="clean-list"> 
            <input @input="updateNote" v-model="todo.isDone" type="checkbox">
                <label @blur="updateNote($event, 'txt', idx)" :class="{marked: todo.isDone}" contenteditable="true">{{ todo.txt }}</label>
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
                } else this.note[elType] = value;

                keepService.updateNote(this.note);
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