import { emailService } from '../services/email-service.js'
export default {
    props: ['emailId'],
    template:
        `<article class="email-details">
            <h3 class="email-subject">{{ email.subject }}</h3>
            <div class="sender-details flex">
            <h4 class="email-from-details mr3">{{ getEmailDetails.from }}</h4>
            <h5 class="email-from" ><{{ email.from }}></h5>
            <div>
                
            </div>
            </div>
            <p class="email-body">{{ email.body }}</p>
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