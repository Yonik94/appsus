import { emailService } from '../services/email-service.js';
import emailPreview from './email-preview-cmp.js';
import emailDetails from './email-details-cmp.js';
import emailCompose from './email-compose-cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


// <email-compose v-else-if="$route.name === 'drafts'" :emailId="emailId"></email-compose>
export default {
    name: 'emails-list',
    template:
        `<main>
            <ul v-if="!emailId && $route.name !== 'drafts'">
                <router-link v-for="(email, idx) in emails" :key="idx" :to="$route.name + '/' + email.emailId">
                    <email-preview :email="email"></email-preview>
                </router-link>
            </ul>
            <email-compose v-else-if="$route.name === 'drafts'" :emailId="emailId"></email-compose>
            <email-details v-else :emailId="emailId"></email-details>
            </main>`,
    data() {
        return {
            emails: [],
            emailId: ''
        }
    },
    created() {
        eventBus.$on('emailSent', () => {
            this.updateEmails() })
        this.emailId = this.$route.params.emailId;
        emailService.query(this.$route.name)
            .then(emails => this.emails = emails) 
    },
    watch: {
        '$route'(to, from) {
            this.emailId = this.$route.params.emailId;
            emailService.query(this.$route.name)
                .then(emails => this.emails = emails);
        }
    },
    methods: {
        updateEmails(){
            this.emails = emailService.query(this.$route.name)
            .then(emails => this.emails = emails);
        }
    },
    components: {
        emailPreview,
        emailDetails,
        emailCompose
    }
}