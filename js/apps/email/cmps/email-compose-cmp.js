

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
    name: 'email-compose',
    template:
        `<section>
        <input @input="saveToDraft" v-model="emailTo" type="email" placeholder="To:"></input>
        <input @input="saveToDraft" v-model="emailSubject" type="text" placeholder="Subject"></input>
        <textarea @input="saveToDraft" v-model="emailBody" name="body" id="" cols="30" rows="10" placeholder="Enter your email body">
        </textarea>
        <button @click="sendEmail()">Send</button>
    </section>`,

    data() {
        return {
            emailTo: '',
            emailSubject: '',
            emailBody: '',
            emailId: null
        }
    },

    methods: {
        sendEmail() {
            const email = {
                from: 'me@gmail.com',
                to: this.emailTo,
                subject: this.emailSubject,
                body: this.emailBody
            }
            emailService.sendEmail(email)
                .then(() => {
                    this.$emit('closeCompose');
                    eventBus.$emit('emailSent');
                });
        },
        saveToDraft(){
            const email = {
                from: 'me@gmail.com',
                to: this.emailTo,
                subject: this.emailSubject,
                body: this.emailBody
            }
            emailService.saveToDraft(email, this.emailId)
        }
    },
    created() {
        emailService.createDraft()
        .then(draftId => this.emailId = draftId)
    }

}