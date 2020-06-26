import controllerBtns from './controller-btns-cmp.js';

export default {
    props: ['note'],
    template:
        `<article>
        <h4>{{ note.title }}</h4>
        <iframe :src="note.info.videoUrl" frameborder="0"></iframe>
        <controller-btns></controller-btns>
        </article>`,
    components: {
        controllerBtns
    }
}