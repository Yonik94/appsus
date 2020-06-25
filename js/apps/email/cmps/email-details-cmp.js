import { emailService } from '../services/email-service.js'
export default {
    props: ['emailId'], 
    template:
    `<article>
        <h4>{{ email.subject }}</h4>
        <p>{{ email.body }}</p>
    </article>`,
    data() {
        return {
            email: {}
        }
    },
    created(){
        emailService.getEmailById(this.emailId)
        .then(email => this.email = email)
    }
}