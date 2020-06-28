import { eventBus } from '../../../services/event-bus-service.js';
import { emailService } from '../services/email-service.js';

export default {
    name: 'side-nav',
    template:
        `<nav class="email-side-nav flex column align-center email-side-nav">
        <button @click="composeEmail" class="compose-email-btn flex align-center mb3" ><img class="mr3" src="img/icons/compose.png" alt=""> Compose</button>
        <router-link to="/email/inbox" :class="{selectedInbox: routeName === 'inbox'}">
        Inbox <span></span>
        </router-link>  
        <router-link to="/email/starred" :class="{selectedFolder: routeName === 'starred'}">Starred</router-link> 
        <router-link to="/email/sent" :class="{selectedFolder: routeName === 'sent'}">Sent</router-link> 
        <router-link to="/email/drafts" :class="{selectedFolder: routeName === 'drafts'}">Drafts</router-link> 
        <router-link to="/email/deleted" :class="{selectedFolder: routeName === 'deleted'}">Deleted</router-link> 
        <router-link to="/email/all" :class="{selectedFolder: routeName === 'all'}">All Mail</router-link> 
    </nav>`,
    data() {
        return {
            isDraftOpen: false,
            routeName: this.$route.name
        }
    },
    methods: {
        composeEmail() {
            if (this.isDraftOpen) return
            eventBus.$emit('composeEmail')
            this.isDraftOpen = true
        }
    },
    created() {
        eventBus.$on('closeDraft', () => {
            this.isDraftOpen = false;
        })
    },
    watch: {
        '$route'(to, from) {
            this.routeName = this.$route.name;
        }
    }
}