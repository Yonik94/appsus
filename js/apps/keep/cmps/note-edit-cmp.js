import { keepService } from '../services/keep-service.js'

export default {
    name: 'note-edit',
    template:
        `<section>
        Modal Note:
            {{ currNoteId }}
        </section>`,
    data() {
        return {
            noteId: null,
            note: null
        }
    },
    created() {
        // console.log(this.$route.params.noteId);
    },
    computed: {
        currNoteId() {
            return this.$route.params.noteId;
        },
    }
}