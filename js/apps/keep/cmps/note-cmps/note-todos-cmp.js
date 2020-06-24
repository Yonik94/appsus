import controllerBtns from './controller-btns-cmp.js';
import noteImgCmp from './note-img-cmp.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
        `<article>
        <h4> {{ note.title }} </h4>
        <ul>
        <li v-for="todo in note.info.todos"> 
        <input v-model="todo.isDone" type="checkbox">
                <label :class="todo.isDone"> {{ todo.txt }} </label>
            </li>
            </ul>
        <controller-btns></controller-btns>
    </article>`,
    components: {
        controllerBtns
    },
    methods: {
        // isTodoDone(){

        // }
    },
    computed: {

    }
};