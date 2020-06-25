export default {
    name: 'side-nav',
    template:
    `<nav>
        <button @click="composeEmail">Compose</button>
        <router-link to="/email/inbox">Inbox</router-link>  
        <router-link to="/email/starred">Starred</router-link> 
        <router-link to="/email/sent">Sent</router-link> 
        <router-link to="/email/drafts">Drafts</router-link> 
        <router-link to="/email/deleted">Deleted</router-link> 
        <router-link to="/email/all">All Mail</router-link> 
    </nav>`,
    methods:{
        composeEmail(){
            this.$emit('openCompose')
        }
    }
}