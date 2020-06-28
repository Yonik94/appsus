export default {
    name: 'controller-btns',
    template:
        `<section class="controller-btns">
            <button class="note-palette"><i class="fas fa-palette"></i>
            <div class="note-colors bg-white flex wrap absolute">
                <i @click="changeNoteColor('#fff475')" class="fas fa-circle" style="color: #fff475"></i>
                <i @click="changeNoteColor('#fbbc04')" class="fas fa-circle" style="color: #fbbc04"></i>
                <i @click="changeNoteColor('#f28b82')" class="fas fa-circle" style="color: #f28b82"></i>
                <i @click="changeNoteColor('#aecbfa')" class="fas fa-circle" style="color: #aecbfa"></i>
                <i @click="changeNoteColor('#cbf0f8')" class="fas fa-circle" style="color: #cbf0f8"></i>
                <i @click="changeNoteColor('#a7ffeb')" class="fas fa-circle" style="color: #a7ffeb"></i>
                <i @click="changeNoteColor('#ccff90')" class="fas fa-circle" style="color: #ccff90"></i>
                <i @click="changeNoteColor('#e8eaed')" class="fas fa-circle" style="color: #e8eaed"></i>
                <i @click="changeNoteColor('#e6c9a8')" class="fas fa-circle" style="color: #e6c9a8"></i>
                <i @click="changeNoteColor('#d7aefb')" class="fas fa-circle" style="color: #d7aefb"></i>
                <i @click="changeNoteColor('#b356ac')" class="fas fa-circle" style="color: #b356ac"></i>
                <i @click="changeNoteColor('#c1be48')" class="fas fa-circle" style="color: #c1be48"></i>
            </div>
            </button>
            <button @click="duplicateNote"><i class="far fa-clone"></i></button>
            <button @click="deleteNote"><i class="far fa-trash-alt"></i></button>
            <button @click="forward"><i class="far fa-share-square"></i></button>
        </section>`,
    methods: {
        changeNoteColor(color) {
            this.$emit('changeNoteColor', color);
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