import noteTxt from './note-cmps/note-txt-cmp.js';
import noteImg from './note-cmps/note-img-cmp.js';
import noteTodos from './note-cmps/note-todos-cmp.js';

/* <router-link :to="'/keep/' + note.noteId">
</router-link> */

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
        noteTodos
    },
    methods: {
        selectNote(note) {
            console.log(note.noteId);
            this.$emit('selectedNote', note);
        }
    }
}