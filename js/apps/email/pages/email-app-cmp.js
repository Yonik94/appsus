//TODO - to change the  the router view to "email-list"
// the route will be to the same component (email-app) with diff route param (inbox,starred,sent etc)"
// the compose will be in email-app and will emit an event when save done.
// then the email-app will update it's emails liist and update the component email-list
// the it should rerender the lists

// import { emailService } from '../services/email-service.js';
import emailCompose from '../cmps/email-compose-cmp.js';
import emailSideNav from '../cmps/side-nav-cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';

// Consider decluttering email-folders duplicates using passage of folderType property

// template: header, nav, emails-list, email-compose
// index.html/email/:folder? (emailApp that renders emailsList by param)
// index.html/email/inbox/:emailId?
export default {
    name: 'email-app',
    template:
        `<main class="flex column">
            <header>Insert header component here</header>
            <section class="flex">
                <email-side-nav></email-side-nav>
                <router-view />
                <email-compose v-show="isDraftOpen" :open="isDraftOpen"></email-compose>
            </section>
        </main>`,
    data() {
        return { isDraftOpen: false }
    },

    components: {
        emailCompose,
        emailSideNav
    },
    created() {
        eventBus.$on('composeEmail', () => {
            this.toggleCompose(true)
        });
        eventBus.$on('closeDraft', () => {
            this.toggleCompose(false)
        });
    },
    methods: {
        toggleCompose(state) {
            this.isDraftOpen = state;
        },
    }
}