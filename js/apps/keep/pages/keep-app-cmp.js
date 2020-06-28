import { keepService } from '../services/keep-service.js'
import notesList from '../cmps/notes-list-cmp.js';
import noteCreate from '../cmps/note-create-cmp.js';

export default {
    name: 'keep-app',
    template:
        `<div class="keep-app-container">
            <main>
                <note-create @createNote="createNote"></note-create>
                <notes-list :notes="notes" @updateNote="updateNote" @deleteNote="deleteNote"
                    @duplicateNote="duplicateNote"></notes-list>
            </main>
        </div>`,
    // @selectedNote="selectNote"
    data() {
        return {
            notes: null,
            // currNote: null
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes);
    },
    components: {
        notesList,
        noteCreate
    },
    methods: {
        // selectNote(note) {
        //     this.currNote = note;
        // },
        createNote(noteType, inputVal) {
            console.log(this.noteType, this.inputVal)
            keepService.createNote(noteType, inputVal)
                .then(notes => { this.notes = notes });
        },
        updateNote(note) {
            keepService.updateNote(note)
                .then(notes => { this.notes = notes; console.log(this.notes) })
        },
        changeFavicon(src) {
            var link = document.createElement('link'),
                oldLink = document.getElementById('dynamic-favicon');
            link.id = 'dynamic-favicon';
            link.rel = 'shortcut icon';
            link.href = src;
            if (oldLink) {
                document.head.removeChild(oldLink);
            }
            document.head.appendChild(link);
        },
        deleteNote(noteId) {
            keepService.deleteNote(noteId)
                .then(notes => { this.notes = notes });
        },
        duplicateNote(note) {
            keepService.duplicateNote(note)
                .then(notes => { this.notes = notes });
        }
    }
}