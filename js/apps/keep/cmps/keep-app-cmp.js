import { keepTestDataService } from '../services/keep-test-data-service.js'

export default {
    name: 'keep-app',
    template:
        ``,
    data() {
        return {
            notes: null
        }

    },
    create(){
        keepTestDataService.getNotes()
        .then(notes => this.notes = notes)
        .then(() => console.log(this.notes))
    },
}
