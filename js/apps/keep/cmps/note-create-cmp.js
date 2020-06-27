// .replace('watch?v=', 'embed/')

export default {
    template:
    `<section class="flex" style="border: 1px solid #aaa">
        <i v-if="noteType === 'noteTodos'" class="far fa-plus-square"></i>
        <input v-model="inputVal" @blur="createNote" @keyup.enter="createNote" @enter="createNote"
            :placeholder="placeholder" class="bg-transparent no-border" type="text" />
        <button @click="switchNoteType('noteTxt')"><i class="fas fa-paragraph"></i></button>       
        <button @click="switchNoteType('noteTodos')"><i class="far fa-check-square"></i></i></button>       
        <button @click="switchNoteType('noteImg')"><i class="far fa-image"></i></button>       
        <button @click="switchNoteType('noteVideo')"><i class="fab fa-youtube"></i></i></button>       
    </section>`,
    data() {
        return {
            placeholder: 'Insert text...',
            inputVal: '',
            noteType: 'noteTxt'
        }
    },
    methods: {
        switchNoteType(noteType) {
            this.noteType = noteType;
            switch (noteType) {
                case 'noteTxt':
                    this.placeholder = 'Insert text...';
                    break;
                case 'noteTodos':
                    this.placeholder = 'Insert item...';
                    break;
                case 'noteImg':
                    this.placeholder = 'Insert image URL...';
                    break;
                case 'noteVideo':
                    this.placeholder = 'Insert video URL...';
                    break;
            }
        },
        createNote() {
            if (!this.inputVal) return;
            this.$emit('createNote', this.noteType, this.inputVal);
            this.noteType = '';
        }
    }
}