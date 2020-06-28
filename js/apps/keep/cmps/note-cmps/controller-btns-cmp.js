import colorsPalette from './color-palette-cmp.js';

export default {
    name: 'controller-btns',
    template:
    `<section class="controller-btns">
    <button class="note-palette relative" title="Background color">
        <i class="fas fa-palette"></i>
        <colors-palette @changeNoteColor="changeNoteColor"></colors-palette>
    </button>
            <button @click="duplicateNote" title="Make a copy"><i class="far fa-clone"></i></button>
            <button @click="deleteNote" title="Delete"><i class="far fa-trash-alt"></i></button>
            <button @click="forward" title="Forward to Email"><i class="far fa-share-square"></i></button>
        </section>`,
    methods: {
        changeNoteColor(color) {
            this.$emit('changeNoteColor', color);
        },
        deleteNote() {
            this.$emit('deleteNote');
        },
        duplicateNote(update) {
            this.$emit('duplicateNote');
            console.log(update)
        },
        forward() {
            console.log('Forward note hasn\'t implemented yet');
        }
    },
    components: {
        colorsPalette
    }
}