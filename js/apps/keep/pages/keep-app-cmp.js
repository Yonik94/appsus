import { keepTestDataService } from '../services/keep-test-data-service.js'
import notesList from '../cmps/notes-list-cmp.js' ;

export default {
    name: 'keep-app',
    template:
        `<main>
            <notes-list :notes="notes"></notes-list>
        </main>`,

    data() {
        return {
            notes: null
        }

    },

    created() {
        keepTestDataService.query()
            .then(notes => this.notes = notes)
            .then(() => console.log(this.notes))
    },
    components: {
        notesList
    }
};