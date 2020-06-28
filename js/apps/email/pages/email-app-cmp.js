//TODO - to change the  the router view to "email-list"
// the route will be to the same component (email-app) with diff route param (inbox,starred,sent etc)"
// the compose will be in email-app and will emit an event when save done.
// then the email-app will update it's emails liist and update the component email-list
// the it should rerender the lists

// import { emailService } from '../services/email-service.js';
import emailCompose from '../cmps/email-compose-cmp.js';
import emailSideNav from '../cmps/side-nav-cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
import mainHeader from '../../../cmps/header.js';

export default {
    name: 'email-app',
    template:
        `<main class="flex column" :class="{'toggle-nav': isMenuOpen}">
            <main-header @changeHamburger="openCloseMenu"></main-header>
            <section class="email-main-container flex">
                <email-side-nav @changeHamburger="openCloseMenu"></email-side-nav>
                <router-view class="grow" />
                <email-compose v-show="isDraftOpen" :open="isDraftOpen"></email-compose>
            </section>
        </main>`,
    data() {
        return {
            isDraftOpen: false,
            isMenuOpen: false

        }
    },
    components: {
        emailCompose,
        emailSideNav,
        mainHeader
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
        openCloseMenu(){
            this.isMenuOpen = !this.isMenuOpen 
        }
    }
}