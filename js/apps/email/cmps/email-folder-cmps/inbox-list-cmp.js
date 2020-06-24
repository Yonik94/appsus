export default {
    name: 'inbox-list',
    template:
        `<main>
            <h2>{{ email }}</h2>
        </main>`,
    data() {
        
    },
    created() {
        console.log(this.email);
    }
};