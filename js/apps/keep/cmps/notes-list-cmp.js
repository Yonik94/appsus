import noteTxt from './note-cmps/note-txt-cmp.js'
import noteImg from './note-cmps/note-img-cmp.js'
import noteTodos from './note-cmps/note-todos-cmp.js'
export default {
    name: 'notes-list',
    props: ['notes'],
    template:
        `<main>
    <article v-for="note in notes">
    <component :is="note.type" :note="note"></component>
    </article>
    </main>`,
    components: {
        noteTxt,
        noteImg,
        noteTodos
    }
};