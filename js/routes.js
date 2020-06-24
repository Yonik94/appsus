import home from './pages/home-cmp.js';
import about from './pages/about-cmp.js';
import keepApp from './apps/keep/pages/keep-app-cmp.js';

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
];

export const appRouter = new VueRouter({ routes });