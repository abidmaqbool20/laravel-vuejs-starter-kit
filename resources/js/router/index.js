import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const routes = [
    {
        path: '/login',
        component: () => import('@/views/auth/Login.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/register',
        component: () => import('@/views/auth/Register.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/dashboard',
        component: () => import('@/views/app/Dashboard.vue'),
        meta: { requiresAuth: true, layout: 'default' },
    },
    {
        path: '/users',
        component: () => import('@/views/app/Users.vue'),
        meta: { requiresAuth: true },
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();

    if (to.meta.requiresAuth && !auth.token) {
        // Not authenticated — redirect to login
        next('/login');
    } else if ((to.path === '/login' || to.path === '/register') && auth.token) {
        // Authenticated users shouldn't see login/register
        next('/dashboard');
    } else {
        next();
    }
});

export default router;
