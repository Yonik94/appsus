import { appRouter } from './routes.js';
import { eventBus } from './services/event-bus-service.js';

new Vue({
    el: "#appsus",
    router: appRouter,
    template:
        `<div class="wrapper">
            <router-view />
        </div>`
});