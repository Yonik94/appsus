export default {
    props: ['note'],
    template:
        `<iframe :src="note.info.videoUrl" width="100%" frameborder="0" allowfullscreen></iframe>`,
}