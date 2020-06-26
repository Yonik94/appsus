import { emailService } from '../services/email-service.js';

export default {
    props: ['email'],
    template:
        `<li class="flex space-between" :class="{ fw600: !email.status.isRead }"
        @click="openEmail(email)">
        <div>{{ getEmailDetails.from }}</div>
        <div>{{ email.subject }} - {{ email.body }}</div>
        <div>{{ getEmailDetails.sentAt }}</div>
    </li>`,
    computed: {
        getEmailDetails(){
            return {sentAt: emailService.getEmailSentAt(this.email.sentAt),
                    from: emailService.getSenderName(this.email.from)}

        }
    },
    methods: {
        openEmail(email) {
            emailService.markAsRead(email.emailId)
        }
    }
}