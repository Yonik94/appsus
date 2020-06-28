import controllerBtns from './controller-btns-cmp.js';

export default {
    props: ['note'],
    template:
        `<div>
            <img style="width:100%" :src="note.info.imgUrl" alt="">
            <p @blur="updateTxt($event)" @keydown.116="updateTxt($event)" @keydown.enter.prevent data-ph="Insert text..." contenteditable="true">{{ note.info.txt }}</p>
        </div>`,
    methods: {
        updateTxt(ev) {
            const value = ev.target.innerText;
            this.note.info.txt = value;

            this.$emit('updateNote', this.note);
        },
    }
}