import controllerBtns from './controller-btns-cmp.js';

export default {
    props: ['note'],
    template:
        `<div>
            <img style="width:100%" :src="note.info.imgUrl" alt="">
            <p>{{ note.info.txt }}</p>
        </div>`,
    components: {
        controllerBtns
    }
}