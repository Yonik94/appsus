export default {
    name: 'controller-btns',
    template:
        `<section>
        <button @mouseover="showColors"> Background </button>
        <button @click="deleteNote"> Delete </button>
        <button @click="duplicateNote"> Duplicate </button>
        <button @click="forward"> Forward to email </button>
    </section>`,
    methods: {
        showColors() {
            console.log('Background color');
        },
        deleteNote() {
            this.$emit('deleteNote');
        },
        duplicateNote() {
            console.log('Duplicate');
        },
        forward() {
            console.log('forward');
        }
    }
}