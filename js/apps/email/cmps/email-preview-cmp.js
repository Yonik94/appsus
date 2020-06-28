import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    props: ['email'],
    template:
        `<li class="email-preview flex align-center"
        :class="{ fw600: !email.status.isRead, 'bg-white': !email.status.isRead, 'bg-grey': email.status.isRead}"
        @click="openEmail(email)">
            <input @click.stop="selectEmail" ref="checkbox" type="checkbox"></input>
            <img @click.prevent="updateStarredStatus" v-if="!email.status.isStarred" class="star" src="img/icons/star.png" alt="">
            <img @click.prevent="updateStarredStatus" class="star-f" v-else src="img/icons/star-f.png" alt="">
            <div class="email-from">{{ getEmailDetails.from }}</div>
            <div class="email-subject">{{ email.subject }} - <span class="fw400">{{ email.body }}</span></div>
            <div class="email-sent-at">{{ getEmailDetails.sentAt }}</div>
    </li>`,
    computed: {
        getEmailDetails() {
            return {
                sentAt: emailService.getEmailSentAt(this.email.sentAt),
                from: emailService.getSenderName(this.email.from)
            }
        }
    },
    methods: {
        openEmail(email) {
            emailService.markAsRead(email.emailId)
        },
        updateStarredStatus() {
            this.email.status.isStarred = !this.email.status.isStarred
        },
        selectEmail(){
            this.$emit('emailSelected', this.$refs.checkbox.checked, this.email.emailId)
        }
    },
    created(){
        eventBus.$on('emailsDeleted', () => {
            this.$refs.checkbox.checked = false
        })
        eventBus.$on('selectedEmailsUnread', () => {
            this.$refs.checkbox.checked = false
        })
    }
}