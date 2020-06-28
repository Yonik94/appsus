import { emailService } from '../services/email-service.js'
export default {
    props: ['emailId'],
    template:
        `<article class="email-details">
        <div>
                <button>
                    <i @click="backToFolder" class="fas fa-arrow-left"></i>
                </button>
                <button>
                    <i class="fas fa-trash" @click="deleteSelected()"></i>
                </button>
                <button @click="changeEmailToUnread">
                <i class="fas fa-envelope"></i>
                </button>
            </div>
            <h3 class="email-subject">{{ email.subject }}</h3>
            <div class="sender-details flex">
            <h4 class="email-from-details mr3">{{ getEmailDetails.from }}</h4>
            <h5 class="email-from" ><{{ email.from }}></h5>
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
    methods: {
        deleteSelected() {
            const emailIds = []
            emailIds.push(this.emailId)
            emailService.deleteEmails(emailIds)
                .then(() => {
                    this.$emit('emailDeleted')
                    this.$router.go(-1)
                })
            },

            backToFolder(){
                this.$router.go(-1)
        },

        changeEmailToUnread(){
            const emailIds = []
            emailIds.push(this.emailId)
            emailService.emailsUnread(emailIds)
            .then(() => {
                this.$emit('emailRead')
                    this.$router.go(-1)
            })
        }
    },

    created() {
        emailService.getEmailById(this.emailId)
            .then(email => this.email = email);
    }
}