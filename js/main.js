import { appRouter } from './routes.js';

new Vue({
    el: "#appsus",
    router: appRouter,
    template:
        `<div class="wrapper">
            <router-view />
        </div>`
});