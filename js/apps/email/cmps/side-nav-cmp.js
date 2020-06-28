import { eventBus } from '../../../services/event-bus-service.js';
// import { emailService } from '../services/email-service.js';

export default {
    name: 'side-nav',
    template:
        `<nav @click="openCloseHamburger" class="email-side-nav flex column align-center email-side-nav" :class="{isClose: 'hidden'}">
        <button @click="composeEmail" class="compose-email-btn flex align-center mb3" >
        <img class="mr3" src="img/icons/compose.png" alt="">Compose</button>
        <router-link to="/email/inbox" :class="{selectedInbox: routeName === 'inbox'}">
        <i class="fas fa-inbox pr3"></i> Inbox <span></span>
        </router-link>  
        <router-link to="/email/starred" :class="{selectedFolder: routeName === 'starred'}">
        <i class="fas fa-star pr3"></i> Starred</router-link> 
        <router-link to="/email/sent" :class="{selectedFolder: routeName === 'sent'}">
        <i class="fas fa-share pr3"></i>Sent</router-link> 
        <router-link to="/email/drafts" :class="{selectedFolder: routeName === 'drafts'}">
        <i class="fas fa-file pr3"></i> Drafts</router-link> 
        <router-link to="/email/deleted" :class="{selectedFolder: routeName === 'deleted'}">
        <i class="fas fa-trash pr3"></i>Deleted</router-link> 
        <router-link to="/email/all" :class="{selectedFolder: routeName === 'all'}">
        <i class="fas fa-envelope pr3"></i>All mails</router-link> 
    </nav>`,

    data() {
        return {
            isDraftOpen: false,
            routeName: this.$route.name,
            isClose: true
        }
    },
    methods: {
        composeEmail() {
            if (this.isDraftOpen) return
            eventBus.$emit('composeEmail')
            this.isDraftOpen = true
        },
        openCloseHamburger() {
            this.$emit('changeHamburger')
        }
    },
    created() {
        eventBus.$on('closeDraft', () => {
            this.isDraftOpen = false;
        })
        eventBus.$on('isHumburgerOpen', (status) => { this.openCloseNav(status) })
    },
    watch: {
        '$route'(to, from) {
            this.routeName = this.$route.name;
        }
    }
}