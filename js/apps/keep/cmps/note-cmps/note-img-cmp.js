import controllerBtns from './controller-btns-cmp.js';

export default {
    props: ['note'],
    template:
        `<article style="max-width:310px">
            <h4>{{ note.title }}</h4>
            <img style="width:100%" :src="note.info.imgUrl" alt="">
            <p>{{ note.info.txt }}</p>
            <controller-btns></controller-btns>
        </article>`,
    components: {
        controllerBtns
    }
}