import home from './pages/home-cmp.js';
import about from './pages/about-cmp.js';
import keepApp from './apps/keep/pages/keep-app-cmp.js';
import emailApp from './apps/email/pages/email-app-cmp.js';
import inboxList from './apps/email/cmps/email-folder-cmps/inbox-list-cmp.js';

const routes = [
        {
                path: '/',
                component: home
        },
        {
                path: '/about',
                component: about
        },
        {
                path: '/keep',
                component: keepApp
        },
        {
                path: '/email',
                component: emailApp,
                children: [
                        {
                                path: '/inbox',
                                component: inboxList
                        },
                ]
        },
];

export const appRouter = new VueRouter({ routes });