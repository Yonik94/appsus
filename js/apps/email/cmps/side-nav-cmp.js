import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'side-nav',
    template:
    `<nav class="flex column space-between align-center email-side-nav">
        <button @click="composeEmail">Compose</button>
        <router-link to="/email/inbox">Inbox</router-link>  
        <router-link to="/email/starred">Starred</router-link> 
        <router-link to="/email/sent">Sent</router-link> 
        <router-link to="/email/drafts">Drafts</router-link> 
        <router-link to="/email/deleted">Deleted</router-link> 
        <router-link to="/email/all">All Mail</router-link> 
    </nav>`,
    data(){
        return {
            isDraftOpen: false
        }
    },
    methods:{
        composeEmail(){
            if (this.isDraftOpen) return
            eventBus.$emit('composeEmail')
            this.isDraftOpen = true
        }
    },
    created(){
        eventBus.$on('closeDraft', () => {
            this.isDraftOpen = false;            
        })
    }
}