import { emailTestDataService } from '../services/email-test-data-service.js';

export default {
    name: 'emails-list',
    template:
        `<main>
            <h2>{{ emails }}</h2>
        </main>`,
    data() {
        return {
            emails: null
        }
    },
    created() {
        emailTestDataService.query(this.$route.name)
            .then(emails => this.emails = emails);
    }
};