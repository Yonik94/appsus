export default {
    name: 'action-btns',
    template:
        `<section>
        <button @hover="showColors">Background</button>
        <button @click="deleteNote">Deletebutton>
        <button @click="duplicateNote">Duplicate<button>
        <button @click="forward">Forward to email</button>
    </section>`,
    methods: {
        showColors() {
            console.log('Background color');
        },
        deleteNote() {
            console.log('Delete colors');
        },
        duplicateNote() {
            console.log('Duplicate');
        },
        forward() {
            console.log('forward');
        }
    }
}