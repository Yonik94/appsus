import noteTxt from './note-cmps/note-txt-cmp.js';
import noteImg from './note-cmps/note-img-cmp.js';
import noteTodos from './note-cmps/note-todos-cmp.js';
import noteVideo from './note-cmps/note-video-cmp.js';
import controllerBtns from './note-cmps/controller-btns-cmp.js';

// data-masonry='{ "itemSelector": ".note", "columnWidth": 320, "isFitWidth": true, "transitionDuration": 330 }'
export default {
    name: 'notes-list',
    props: ['notes'],
    template:
        `<section class="notes-list-container flex wrap justify-center" ref="masonryContainer">

                <article v-for="note in notes" :key="note.noteId" class="note" :style="{ backgroundColor: note.style.backgroundColor, borderColor: note.style.borderColor }">
                    <div class="flex note-title-container">
                        <i class="fas fa-thumbtack"></i>
                        <h4 @blur="updateTitle($event, note)" @keydown.116="updateTitle($event, note)"
                            @keydown.enter.prevent contenteditable="true" data-ph="Title">{{ note.title }}</h4>
                    </div>

                    <component :is="note.type" :note="note" @updateNote="updateNote" @deleteNote="deleteNote"
                        @duplicateNote="duplicateNote"></component>

                    <controller-btns @deleteNote="deleteNote(note.noteId)" @duplicateNote="duplicateNote(note)"
                        @changeNoteColor="changeNoteColor($event ,note)"></controller-btns>
                </article>

        </section>`,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        controllerBtns
    },
    data() {
        return {
            masonry: null
        }
    },
    created() {
        setTimeout(() => {
            this.masonry = new Masonry(this.$refs.masonryContainer, {
                columnWidth: 320,
                itemSelector: '.note',
                isFitWidth: true,
                transitionDuration: 330,
                initLayout: true,
            });
            this.masonryUpdate();
        }, 0)
    },
    methods: {
        updateNote(note) {
            this.$emit('updateNote', note);
            setTimeout(() => this.masonry.layout(), 500)
        },
        deleteNote(noteId) {
            this.$emit('deleteNote', noteId);
        },
        duplicateNote(note) {
            this.$emit('duplicateNote', JSON.parse(JSON.stringify(note)));
            location.reload();
        },
        updateTitle(ev, note) {
            const value = ev.target.innerText;
            note.title = value;
            this.$emit('updateNote', note);
        },
        changeNoteColor(color, note) {
            note.style.backgroundColor = color;
            this.updateNote(note);
        },
        masonryUpdate() {
            // console.log(this.$refs.masonryContainer.children)
            setTimeout(() => this.masonry.layout(), 500)
        }
    },
}