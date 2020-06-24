import { emailTestDataService } from '../services/email-test-data-service.js'

export default {
    name: 'email-app',
    template:
        `<main>
            <header>Insert header component here</header>
            <section>Insert sidebar component here</section>
            <router-view />
        </main>`,
    data() {
        return {
            email: null
        }
    },
    created() {
        emailTestDataService.query()
            .then(emails => this.emails = emails)
            .then(() => console.log(this.emails));
    },
};