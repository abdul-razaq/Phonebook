import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import store from '../store';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: true },
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About'),
		meta: { requiresAuth: true },
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/auth/Register'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/auth/Login'),
	},
	{
		path: '/contacts/new',
		name: 'NewContacts',
		component: () => import('../views/NewContact'),
		meta: { requiresAuth: true },
	},
	{
		path: '/contacts/:id',
		props: true,
		name: 'ContactDetails',
		component: () => import('../views/ContactDetails'),
		meta: { requiresAuth: true },
	},
	{
		path: '/contacts/edit/:id',
		props: true,
		name: 'EditContact',
		component: () => import('../views/EditContact'),
		meta: { requiresAuth: true },
	},
	{
		path: '*',
		component: () => import('../views/Error404'),
		meta: { requiresAuth: true },
	},
];

const router = new Router({
	base: '/',
	routes,
	mode: 'history',
});

router.beforeEach((to, from, next) => {
	const authUser = localStorage.getItem('userData');
	if (to.matched.some((routes) => routes.meta.requiresAuth) && !authUser) {
		next({ name: 'Login' });
	}
	next();
});

export default router;
