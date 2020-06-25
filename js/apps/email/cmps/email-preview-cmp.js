import { emailService } from '../services/email-service.js';

export default {
    props: ['email'], 
    template:
    `<li class="flex space-between" :class="{ fw600: !email.status.isRead }" @click="markAsRead(email.emailId)">
        <div>{{ from }}</div>
        <div>{{ email.body }}</div>
        <div>{{ sentAt }}</div>
    </li>`,
    data() {
        return {
            sentAt: null,
            from: null
        }
    },
    
    created() {
        // console.log(this.email.from.match(/^.+?(?=@)/g));
       this.sentAt = emailService.getEmailSentAt(this.email.sentAt)
       this.from = emailService.getSenderName(this.email.from)
    },
    methods: {
        markAsRead(emailId) {
            this.email.status.isRead = true;
        }
    }
}