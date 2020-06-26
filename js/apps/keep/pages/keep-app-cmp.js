import { keepService } from '../services/keep-service.js'
import { eventBus } from '../../../services/event-bus-service.js'
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
            .then(notes => this.notes = notes);

        eventBus.$on('updateNotes', () => {
            keepService.query()
                .then(notes => this.notes = notes)
                .then(() => console.log('RENDERED', this.notes));
        });
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