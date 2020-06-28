
import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
    name: 'email-compose',
    props: ['emailId'],
    template:
        `<section class="email-compose flex column">
            <div class="compose-head flex space-between">
            <h3>{{ emailHead }}</h3>
            <button class="close-btn" @click.stop="closeDraft"><i class="fas fa-times"></i></button>
            </div>
            <input @input="updateDraft" @blur="updateEmails" v-model="emailTo" type="email" placeholder="To:"></input>
            <input @input="updateDraft" @blur="updateEmails" v-model="emailSubject" type="text" placeholder="Subject"></input>
            <textarea class="grow" @input="updateDraft" @blur="updateEmails" v-model="emailBody" name="body" id="" cols="30" rows="10">
            </textarea>
            <button class="send-btn" @click="sendEmail()">Send</button>
        </section>`,

    data() {
        return {
            emailTo: '',
            emailSubject: '',
            emailBody: '',
            // emailId: null,
            emailHead: ''
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
        },
        emailHeader() {
            if (this.emailId) {
                const email = emailService.getEmailById(this.emailId)
                // this.emailId = this.$route.param.emailId
                this.emailTo = email.to
                this.emailSubject = email.subject
                this.emailBody = email.body
                this.emailHead = email.subject
                return
            }
            console.log('email')
            this.emailTo = ''
            this.emailSubject = ''
            this.emailBody = ''
            this.emailHead = 'New email'
        }
    },
    created() {
        eventBus.$on('composeEmail', () => {
            this.createDraft();
        });
        if (this.emailId){
            this.emailHeader()
        }
        
    }
}