import controllerBtns from './controller-btns-cmp.js';

export default {
    name: 'note-todos',
    props: ['note'],
    template:
        `<article>
        <h4>{{ note.title }}</h4>
        <ul v-for="todo in note.info.list">
            <li>{{ todo.txt }}</li>
        </ul>
        <p>{{ note.info.list.txt }}</p>
        <controller-btns></controller-btns>
    </article>`,
    components: {
        controllerBtns
    }
};