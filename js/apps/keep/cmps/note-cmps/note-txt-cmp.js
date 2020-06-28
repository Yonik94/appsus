export default {
    name: 'note-txt',
    props: ['note'],
    template:
        `<p @blur="updateTxt($event)" @keydown.116="updateTxt($event)" @keydown.enter.prevent data-ph="Insert text..." contenteditable="true">{{ note.info.txt }}</p>`,
    methods: {
        updateTxt(ev) {
            const value = ev.target.innerText;
            this.note.info.txt = value;

            this.$emit('updateNote', this.note);
        },
    }
}