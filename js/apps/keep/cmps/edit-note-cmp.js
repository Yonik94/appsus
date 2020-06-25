import { keepService } from '../services/keep-service.js'

export default {
    props: ['note'],
    name: 'edit-note',
    template:
        `<section>
            hi
        </section>`,
    data() {
        return {
            noteToEdit: null
        }
    },
    created() {
        const id = this.$route.params.noteId
        if (id){
            keepService.findNoteById(id)
            .then(note => {
                this.noteToEdit = note
            })
            .then(() => console.log(this.noteToEdit))
        }
    }
}