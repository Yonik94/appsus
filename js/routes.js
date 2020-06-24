import homePage from './pages/home-page-cmp.js';

const myRoutes = [
        {
                path: '/',
                component: homePage
        },
        {
                path: '/about',
                component: aboutUs
        },
]
export const myRouter = new VueRouter({ routes: myRoutes })