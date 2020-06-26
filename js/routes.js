import home from './pages/home-cmp.js';
import about from './pages/about-cmp.js';
import keepApp from './apps/keep/pages/keep-app-cmp.js';
import emailApp from './apps/email/pages/email-app-cmp.js';
import emailsList from './apps/email/cmps/emails-list-cmp.js';

// Check if alias with multiple names exists in vue (in order to remove duplicated childrens of emailApp)
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
                path: '/keep/:noteId?',
                component: keepApp,
        },
        {
                path: '/email/:folder?',
                redirect: { name: 'inbox' },
                component: emailApp,
                children: [
                        {
                                name: 'inbox',
                                path: 'inbox/:emailId?',
                                component: emailsList
                        },
                        {
                                name: 'starred',
                                path: 'starred/:emailId?',
                                component: emailsList
                        },
                        {
                                name: 'sent',
                                path: 'sent/:emailId?',
                                component: emailsList
                        },
                        {
                                name: 'drafts',
                                path: 'drafts/:emailId?',
                                component: emailsList
                        },
                        {
                                name: 'deleted',
                                path: 'deleted/:emailId?',
                                component: emailsList
                        },
                        {
                                name: 'all',
                                path: 'all/:emailId?',
                                component: emailsList
                        },
                ]
        },
];

export const appRouter = new VueRouter({ routes })