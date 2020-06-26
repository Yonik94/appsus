import noteTxt from './note-cmps/note-txt-cmp.js';
import noteImg from './note-cmps/note-img-cmp.js';
import noteTodos from './note-cmps/note-todos-cmp.js';
import noteVideo from './note-cmps/note-video-cmp.js';

export default {
    name: 'notes-list',
    props: ['notes'],
    template:
        `<main>
            <article v-for="note in notes" @click="selectNote(note)">
                    <component :is="note.type" :note="note" style="border: 1px solid black"></component>
            </article>
        </main>`,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    },
    methods: {
        selectNote(note) {
            console.log({ noteId: note.noteId }); // To Delete
            this.$emit('selectedNote', note);
        }
    }
}