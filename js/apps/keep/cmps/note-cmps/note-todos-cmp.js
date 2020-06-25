import controllerBtns from './controller-btns-cmp.js';

import { keepService } from '../../services/keep-service.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
        `<article>
            <h4 contenteditable="true"> {{ note.title }} </h4>
            <ul>
            <li v-for="(todo, idx) in note.info.todos" class="clean-list"> 
            <input v-model="todo.isDone" type="checkbox">
                <label @input="saveNote(note.noteId, idx, 'txt')" :ref="'todo-' + idx" :class="{marked: todo.isDone}" contenteditable="true">{{ todo.txt }}</label>
                <button>X</button>
            </li>
            </ul>
            <controller-btns></controller-btns>
    </article>`,
    components: {
        controllerBtns
    },
    methods: {
        saveNote(noteId, idx) {
            const currEl = this.$refs['todo-' + idx][0];
            keepService.saveNote(noteId, 'todo-' + idx ,currEl.innerHTML);
            console.log(currEl, currEl.innerHTML);
        },

        // validateTodoStr(note){
            // @blur="checkStr(note)"
        // }
    }
}