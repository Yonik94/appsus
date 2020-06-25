

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
    name: 'email-compose',
    template:
        `<section>
        <input type="email" placeholder="To:"></input>
        <input @input="updateEmailSubject()" type="text" placeholder="Subject" :ref="'subject'"></input>
        <textarea @input="updateEmailBody($el.value)" name="body" id="" cols="30" rows="10" placeholder="Enter your email body" :ref="'body'">
        </textarea>
        <button @click="sendEmail()">Send</button>
    </section>`,

    data() {
        return {
            emailSubject: '',
            emailBody: ''
        }
    },

    methods: {
        updateEmailSubject() {
            const currEl = this.$refs['subject']
            this.emailSubject = currEl.value
        },

        updateEmailBody() {
            const currEl = this.$refs['body']
            this.emailBody = currEl.value
        },

        sendEmail() {
            emailService.sendEmail('me@gmail.com', this.emailSubject, this.emailBody)
                .then(emails => {
                    this.$emit('closeCompose')
                    eventBus.$emit('emailSent', emails)
                })

        }
    },

}