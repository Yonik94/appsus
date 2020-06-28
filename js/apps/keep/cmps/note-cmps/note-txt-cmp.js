export default {
    name: 'note-txt',
    props: ['note'],
    template:
        `<p>{{ note.info.txt }}</p>`,
}