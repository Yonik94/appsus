import { emailService } from '../services/email-service.js';
import emailPreview from './email-preview-cmp.js';
import emailDetails from './email-details-cmp.js';

export default {
    name: 'emails-list',
    template:
        `<main>
            <ul v-if="!emailId" v-for="email in emails">
                <email-preview :email="email"></email-preview>
            </ul>
            <email-details v-else :emailId="emailId"></email-details>
        </main>`,
    data() {
        return {
            emails: null,
            emailId: null
        }
    },
    created() {
        this.emailId = this.$route.params.emailId;
        emailService.query(this.$route.name)
            .then(emails => this.emails = emails);
    },
    watch: {
        '$route'(to, from) {
            this.emailId = this.$route.params.emailId;
            emailService.query(this.$route.name)
                .then(emails => this.emails = emails);
        }
    },
    components: {
        emailPreview,
        emailDetails
    }
}