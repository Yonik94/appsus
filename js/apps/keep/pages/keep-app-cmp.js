import { keepService } from '../services/keep-service.js'
import { eventBus } from '../../../services/event-bus-service.js'
import notesList from '../cmps/notes-list-cmp.js';
import noteCreate from '../cmps/note-create-cmp.js';

export default {
    name: 'keep-app',
    template:
        `<main class="keep-app">
            <note-create @createNote="createNote"></note-create>
            <notes-list :notes="notes" @updateNote="updateNote" @deleteNote="deleteNote"
                @selectedNote="selectNote"></notes-list>
            </main>`,

    data() {
        return {
            notes: null,
            currNote: null
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes);

        eventBus.$on('updateNotes', () => {
            keepService.query()
                .then(notes => this.notes = notes)
                .then(() => console.log('RENDERED', this.notes));
        });
    },
    components: {
        notesList,
        noteCreate
    },
    methods: {
        selectNote(note) {
            this.currNote = note;
        },
        createNote(noteType, inputVal) {
            console.log(this.noteType, this.inputVal)
            keepService.createNote(noteType, inputVal)
                .then(notes => { this.notes = notes });
        },
        updateNote(note) {
            keepService.updateNote(note)
                .then(notes => { this.notes = notes });
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
        }
    }
}