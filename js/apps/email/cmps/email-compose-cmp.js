
import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
    name: 'email-compose',
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
            draftId: null,
            emailHead: ''
        }
    },

    methods: {
        sendEmail() {
            if (this.emailTo === '' && this.emailSubject === '' && this.emailBody === '') {
                emailService.deleteEmail(this.draftId)
                    .then(() => {
                        this.closeDraft()
                        this.clearComposeForm()
                        this.draftId = null,
                            this.emailHead = ''
                    });
                return;
            }
            const email = this.createEmailDetails()
            emailService.sendEmail(this.draftId)
                .then(() => {
                    this.closeDraft();
                    this.clearComposeForm()
                });
        },

        createDraft() {
            emailService.createDraft()
                .then(draftId => this.draftId = draftId);
        },

        updateDraft() {
            const email = this.createEmailDetails();
            emailService.updateDraft(email, this.draftId)
                .then(() => this.updateEmails());
        },

        updateEmails() {
            return Promise.resolve(eventBus.$emit('updateEmails'));
        },

        closeDraft() {
            eventBus.$emit('closeDraft')
            this.updateEmails()
                .then(() => {
                    if (this.emailTo === '' && this.emailSubject === '' && this.emailBody === '') {
                        emailService.deleteEmail(this.draftId)
                            .then(() => this.draftId = null)
                            .then(() => this.updateEmails())
                    }
                })
                .then(() => {
                    this.clearComposeForm()
                    this.$router.go(-1)
                })
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
            if (this.draftId) {
                emailService.getEmailById(this.draftId)
                    .then(email => {
                        this.emailTo = email.to
                        this.emailSubject = (email.subject !== '(no-subject)') ? email.subject : ''
                        this.emailBody = email.body
                        this.emailHead = (email.subject !== '(no-subject)') ? email.subject : 'New email'
                    })
                return
            }
            this.clearComposeForm()
            this.emailHead = 'New email'
        },

        clearComposeForm() {
            this.emailTo = ''
            this.emailSubject = ''
            this.emailBody = ''
        }
    },

    created() {
        eventBus.$on('composeEmail', () => {
            this.createDraft();
        });
        if (this.$route.params.emailId) {
            this.draftId = this.$route.params.emailId
            this.emailHeader()
        }

    }
}