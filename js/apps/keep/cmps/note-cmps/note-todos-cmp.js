import controllerBtns from './controller-btns-cmp.js';

import { keepService } from '../../services/keep-service.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
        `<article>
            <h4 @blur="saveNote(note.noteId, 'title')" :ref="'title'" contenteditable="true">{{ note.title }}</h4>
            <ul>
            <li v-for="(todo, idx) in note.info.todos" class="clean-list"> 
            <input @click.stop v-model="todo.isDone" type="checkbox">
                <label @blur="saveNote(note.noteId, 'txt', idx)" :ref="'todo-' + idx" :class="{marked: todo.isDone}" contenteditable="true">{{ todo.txt }}</label>
                <button>X</button>
            </li>
            </ul>
            <controller-btns></controller-btns>
    </article>`,
    components: {
        controllerBtns
    },
    methods: {
        saveNote(noteId, elType, idx) {
            const currEl = (idx >= 0) ? this.$refs['todo-' + idx][0] : this.$refs[elType];
            keepService.saveNote(noteId, elType, idx, currEl.innerHTML);
        },

        // validateTodoStr(note){
            // @blur="checkStr(note)"
        // }
    }
}