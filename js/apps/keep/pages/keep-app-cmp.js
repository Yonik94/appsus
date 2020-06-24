import { keepTestDataService } from '../services/keep-test-data-service.js'

export default {
    name: 'keep-app',
    template:
        `<main>
            <h2>{{notes}}</h2>
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
}
