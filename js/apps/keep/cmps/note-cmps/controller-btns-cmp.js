export default {
    name: 'controller-btns',
    template:
        `<section>
        <button @mouseover="showColors"><i class="fas fa-palette"></i></button>
        <button @click="deleteNote"><i class="far fa-trash-alt"></i></button>
        <button @click="duplicateNote"><i class="far fa-clone"></i></button>
        <button @click="forward"><i class="far fa-share-square"></i></button>
    </section>`,
    methods: {
        showColors() {
            console.log('Background color');
        },
        deleteNote() {
            this.$emit('deleteNote');
        },
        duplicateNote() {
            this.$emit('duplicateNote');
        },
        forward() {
            console.log('forward');
        }
    }
}