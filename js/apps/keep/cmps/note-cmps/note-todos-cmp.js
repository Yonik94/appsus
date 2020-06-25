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
        <input contenteditable="false" @click.stop v-model="todo.isDone" type="checkbox">
                <label @blur="checkString(note)" @input="saveNote(note.noteId, $el, idx, 'txt')" contenteditable="true" :class="{marked: todo.isDone}"> {{ todo.txt }} </label>
                <button>X</button>
            </li>
            </ul>
        <controller-btns></controller-btns>
    </article>`,
    components: {
        controllerBtns
    },
    methods: {
        saveNote(id, el, idx, editedEl){
            console.log(el.children[1].children[idx].children[1].innerText)
            console.log('value', el)
            keepService.saveNote(id, el, idx, editedEl)
        },

        checkString(note){

        }
    }

}