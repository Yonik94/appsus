import { emailService } from '../services/email-service.js';

export default {
    name: 'emails-list',
    template:
        `<main>
            <pre>{{ emails }}</pre>
        </main>`,
    data() {
        return {
            emails: null
        }
    },
    created() {
        emailService.query(this.$route.name)
            .then(emails => this.emails = emails);
    },
    watch: {
        '$route'(to, from) {
            emailService.query(this.$route.name)
                .then(emails => this.emails = emails);
        }
    }
};