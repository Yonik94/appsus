import { emailService } from '../services/email-service.js';

export default {
    props: ['email'],
    template:
        `<li class="email-preview flex"
        :class="{ fw600: !email.status.isRead, 'bg-white': !email.status.isRead, 'bg-grey': email.status.isRead}"
        @click="openEmail(email)">
            <div class="email-from">{{ getEmailDetails.from }}</div>
            <div class="email-subject">{{ email.subject }} - {{ email.body }}</div>
            <div class="email-sent-at">{{ getEmailDetails.sentAt }}</div>
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