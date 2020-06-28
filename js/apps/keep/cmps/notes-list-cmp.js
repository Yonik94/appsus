import noteTxt from './note-cmps/note-txt-cmp.js';
import noteImg from './note-cmps/note-img-cmp.js';
import noteTodos from './note-cmps/note-todos-cmp.js';
import noteVideo from './note-cmps/note-video-cmp.js';
import controllerBtns from './note-cmps/controller-btns-cmp.js';

export default {
    name: 'notes-list',
    props: ['notes'],
    template:
        `<main class="notes-list-container">
            <div v-for="note in notes">
                <article class="note" :style="{ backgroundColor: note.style.backgroundColor, borderColor: note.style.backgroundColor }">
                    <i class="fas fa-thumbtack"></i>
                    <h4 @blur="updateNote($event ,'title')" @keydown.116="updateNote($event ,'title')"
                        contenteditable="true" data-ph="Title" class="inline">{{ note.title }}</h4>

                    <component :is="note.type" :note="note" @updateNote="updateNote" @deleteNote="deleteNote"
                        @duplicateNote="duplicateNote"></component>

                    <controller-btns @deleteNote="deleteNote"  @duplicateNote="duplicateNote"></controller-btns>
                </article>
            </div>
        </main>`,
        // @click="selectNote(note)"
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        controllerBtns
    },
    methods: {
        // selectNote(note) {
        //     console.log({ noteId: note.noteId }); // To Delete
        //     this.$emit('selectedNote', note);
        // },
        updateNote(note) {
            this.$emit('updateNote', note);
        },
        deleteNote(noteId) {
            this.$emit('deleteNote', noteId)
        },
        duplicateNote(note) {
            this.$emit('duplicateNote', note)
        }
    }
}