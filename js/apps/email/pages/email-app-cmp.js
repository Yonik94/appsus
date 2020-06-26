//TODO - to change the  the router view to "email-list"
// the route will be to the same component (email-app) with diff route param (inbox,starred,sent etc)"
// the compose will be in email-app and will emit an event when save done.
// then the email-app will update it's emails liist and update the component email-list
// the it should rerender the lists

import { emailService } from '../services/email-service.js';
import emailCompose from '../cmps/email-compose-cmp.js';
import emailSideNav from '../cmps/side-nav-cmp.js';

// Consider decluttering email-folders duplicates using passage of folderType property

// template: header, nav, emails-list, email-compose
// index.html/email/:folder? (emailApp that renders emailsList by param)
// index.html/email/inbox/:emailId?
export default {
    name: 'email-app',
    template:
        `<main>
            <header>Insert header component here</header>
            <email-side-nav @openCompose="composeState(true)"></email-side-nav>
            <router-view />
            <email-compose @closeCompose="composeState(false)" v-if="composeOpen"></email-compose>
        </main>`,
        data() {
            return { composeOpen: false }
        },

    components: {
        emailCompose,
        emailSideNav
    },

    methods:{
        composeState(state){
            this.composeOpen = state;
        }
    }
}