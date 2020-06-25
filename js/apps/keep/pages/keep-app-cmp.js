import { keepService } from '../services/keep-service.js'
import notesList from '../cmps/notes-list-cmp.js';
import noteEdit from '../cmps/note-edit-cmp.js';

export default {
    name: 'keep-app',
    template:
        `<main>
            <input type="text" placeholder="enter your note text"/>
            <notes-list :notes="notes" @selectedNote="selectNote"></notes-list>
            <note-edit :note="currNote"></note-edit>
            </main>`,

    data() {
        return {
            notes: null,
            currNote: null
        }

    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes)
    },
    components: {
        notesList,
        noteEdit
    },
    methods: {
        selectNote(note) {
            this.currNote = note;
        }
    }
}