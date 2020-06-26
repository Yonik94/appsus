
import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
    name: 'email-compose',
    props: ['open'],
    template:
        `<section>
        <button @click.self="closeDraft">X</button>
        <input @input="updateDraft" @blur="updateEmails" v-model="emailTo" type="email" placeholder="To:"></input>
        <input @input="updateDraft" @blur="updateEmails" v-model="emailSubject" type="text" placeholder="Subject"></input>
        <textarea @input="updateDraft" @blur="updateEmails" v-model="emailBody" name="body" id="" cols="30" rows="10">
        </textarea>
        <button @click="sendEmail()">Send</button>
    </section>`,

    data() {
        return {
            emailTo: '',
            emailSubject: '',
            emailBody: '',
            emailId: null,
        }
    },

    methods: {
        sendEmail() {
            if (this.emailTo === '' && this.emailSubject === '' && this.emailBody === '') {
                emailService.deleteEmail(this.emailId)
                .then(() => this.closeDraft());
                return;
            }
            const email = this.createEmailDetails()
            emailService.sendEmail(this.emailId)
                .then(() => {
                    this.closeDraft();
                });
        },
        createDraft() {
            emailService.createDraft()
                .then(draftId => this.emailId = draftId);
        },
        updateDraft() {
            const email = this.createEmailDetails();
            emailService.updateDraft(email, this.emailId)
                .then(() => this.updateEmails());
        },
        updateEmails() {
            console.log('update')
            eventBus.$emit('updateEmails');
        },
        closeDraft() {
            if (this.emailTo === '' && this.emailSubject === '' && this.emailBody === '') {
                emailService.deleteEmail(this.emailId)
                .then(() => this.updateEmails())
            }
            eventBus.$emit('closeDraft');
            this.updateEmails();
            this.emailTo = '';
            this.emailSubject = '';
            this.emailBody = '';
            this.emailId = null;
        },
        createEmailDetails() {
            return {
                from: 'me@gmail.com',
                to: this.emailTo,
                subject: this.emailSubject,
                body: this.emailBody
            }
        }
    },
    created() {
        eventBus.$on('composeEmail', () => {
            this.createDraft();
        });
    }
}