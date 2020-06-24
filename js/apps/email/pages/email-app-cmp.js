import { emailTestDataService } from '../services/email-test-data-service.js'
// Consider decluttering email-folders duplicates using passage of folderType property

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
            emails: null
        }
    },
    created() {
        emailTestDataService.query()
            .then(emails => this.emails = emails)
    },
};