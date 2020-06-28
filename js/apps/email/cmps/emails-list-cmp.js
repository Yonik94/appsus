import { emailService } from '../services/email-service.js';
import emailPreview from './email-preview-cmp.js';
import emailDetails from './email-details-cmp.js';
import emailCompose from './email-compose-cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


// <email-compose v-else-if="$route.name === 'drafts'" :emailId="emailId"></email-compose>
export default {
    name: 'emails-list',
    template:
        `<main class="emails-list flex column">
            <section class="filter-container flex mb1">
            <select @change="filterEmails" :ref="'filterEmails'">
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
            </select>
            <input class="email-search" @input="onSearch()" :ref="'search'" type="text" placeholder="Search mail"/>
            </section>
            <ul v-if="!emailId || $route.name === 'drafts'">
                <section>
                <button  @click="deleteSelected()" v-if="selectedEmails.length">
                <i class="fas fa-trash"></i>
                </button>
                <button @click="changeEmailToUnread" v-if="selectedEmails.length">
                <i class="fas fa-envelope"></i>
                </button>
                </i></section>
                <router-link v-for="(email, idx) in emails" :key="idx" :to="$route.name + '/' + email.emailId">
                    <email-preview :email="email" @emailSelected="updateSelectedEmails"></email-preview>
                </router-link>
            </ul>
            <email-details @emailRead="updateEmails" @emailDeleted="updateEmails" v-else-if="emailId" :emailId="emailId"></email-details>
            <email-compose v-if="emailId && $route.name === 'drafts'" :emailId="emailId"></email-compose>
            </main>`,
    data() {
        return {
            emails: [],
            emailId: '',
            selectedEmails: []

        }
    },
    created() {
        eventBus.$on('updateEmails', () => {
            this.updateEmails()
        })
        this.emailId = this.$route.params.emailId;
        this.updateEmails()
    },
    watch: {
        '$route'(to, from) {
            this.emailId = this.$route.params.emailId;
            this.updateEmails()
        }
    },

    methods: {
        updateEmails() {
            return this.emails = emailService.query(this.$route.name)
                .then(emails => this.emails = emails);
        },

        deleteSelected(){
            emailService.deleteEmails(this.selectedEmails)
            .then(() => {
                this.updateEmails()
                this.selectedEmails = []
                eventBus.$emit('emailsDeleted')
            })
        },

        filterEmails() {
            this.updateEmails()
                .then(emails => {
                    this.emails = emails
                    if (this.$refs['filterEmails'].value === 'all') return
                    const byStatus = this.$refs['filterEmails'].value
                    emailService.getEmailsbyReadingStatus(byStatus, this.emails)
                        .then(emails => this.emails = emails)
                })
        },

        onSearch() {
            this.updateEmails()
                .then(emails => emailService.getEmails(this.$refs.search.value, emails)
                    .then(emails => this.emails = emails));
        },

        updateSelectedEmails(value, emailId) {
            if (value === true) this.selectedEmails.push(emailId)
            else {
                const emailIdx = this.selectedEmails.findIndex(id =>  id === emailId)
                if (emailIdx !== -1) this.selectedEmails.splice(emailIdx, 1)
            }
        },

        changeEmailToUnread(){
            emailService.emailsUnread(this.selectedEmails)
            .then(() => {
                this.updateEmails()
                this.selectedEmails = []
                eventBus.$emit('selectedEmailsUnread')
            })   
        },
    },
    components: {
        emailPreview,
        emailDetails,
        emailCompose
    }
}