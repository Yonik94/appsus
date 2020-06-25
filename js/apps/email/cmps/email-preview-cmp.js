import { emailService } from '../services/email-service.js';

export default {
    props: ['email'],
    template:
        `<li class="flex space-between" :class="{ fw600: !email.status.isRead }" @click="openEmail(email)">
        <div>{{ from }}</div>
        <div>{{ email.subject }} - {{ email.body }}</div>
        <div>{{ sentAt }}</div>
    </li>`,
    data() {
        return {
            sentAt: null,
            from: null
        }
    },

    created() {
        this.sentAt = emailService.getEmailSentAt(this.email.sentAt)
        this.from = emailService.getSenderName(this.email.from)
    },

    methods: {
        openEmail(email){
            emailService.markAsRead(email.emailId)
        }
    }
}