export default {
    props: ['email'], 
    template:
    `<li class="flex space-between">
        <div>{{ email.from }}</div>
        <div>{{ email.body }}</div>
        <div>{{ email.sentAt }}</div>
    </li>`,
    data() {
        return {

        }
    },
    created() {
        console.log(this.email.from.match('^.+?(?=@)'));
    }
}