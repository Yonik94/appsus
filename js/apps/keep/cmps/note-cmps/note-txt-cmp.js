import controllerBtns from './controller-btns-cmp.js';

export default {
    name: 'note-txt',
    props: ['note'],
    template:
        `<article>
        <h4>{{ note.title }}</h4>
        <p>{{ note.info.txt }}</p>
        <controller-btns></controller-btns>
    </article>`,
    components: {
        controllerBtns
    }
};