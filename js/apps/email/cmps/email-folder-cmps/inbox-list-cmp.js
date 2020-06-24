export default {
    name: 'inbox-list',
    props: ['email'],
    template:
        `<main>
            <h2>{{ email }}</h2>
        </main>`,
    created() {
        console.log(this.email);
    }
};