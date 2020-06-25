import { keepService } from '../services/keep-service.js'
import notesList from '../cmps/notes-list-cmp.js';
import editNote from '../cmps/edit-note-cmp.js';

export default {
    name: 'keep-app',
    template:
        `<main>
            <input type="text" placeholder="enter your note text"/>
            <notes-list :notes="notes" @selectedNote="selectNote"></notes-list>
            <edit-note :note="selectedNote"
            :class="{hidden: (selectedNote === false)}"></edit-note>
            </main>`,

    data() {
        return {
            notes: null,
            selectedNote: null
        }

    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes)
    },
    components: {
        notesList,
        editNote
    },
    methods: {
        selectNote(selectNote) {
            this.selectedNote = selectNote

        }
    }
}