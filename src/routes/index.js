import { Home, Following, Profile } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
