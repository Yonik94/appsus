import { emailService } from '../services/email-service.js'
export default {
    props: ['emailId'],
    template:
        `<article class="email-details">
            <h3 class="email-subject">{{ email.subject }}</h3>
            <div class="sender-details flex">
                <h5 class="mr2" ><{{ email.from }}></h5>
                <h4>{{ getEmailDetails.from }}</h4>
            </div>
            <p>{{ email.body }}</p>
        </article>`,
    data() {
        return {
            email: {}
        }
    },
    computed: {
        getEmailDetails() {
            return {
                sentAt: emailService.getEmailSentAt(this.email.sentAt),
                from: emailService.getSenderName(this.email.from)
            }
        }
    },

    created() {
        emailService.getEmailById(this.emailId)
            .then(email => this.email = email);
    }
}