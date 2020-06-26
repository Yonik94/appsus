import { keepService } from '../services/keep-service.js'
import notesList from '../cmps/notes-list-cmp.js';

export default {
    name: 'keep-app',
    template:
        `<main>
            <input type="text" placeholder="enter your note text"/>
            <notes-list :notes="notes" @selectedNote="selectNote"></notes-list>
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
        notesList
    },
    methods: {
        selectNote(note) {
            this.currNote = note;
        }
    }
}