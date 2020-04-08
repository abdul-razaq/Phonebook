import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';

Vue.use(Router);

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/about', name: 'About', component: () => import('../views/About') },
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
		component: () => import('../views/NewContacts'),
	},
	{
		path: '/contacts/:id',
		props: true,
		name: 'ContactDetails',
		component: () => import('../views/ContactDetails'),
	},
	{
		path: '/contacts/edit/:id',
		props: true,
		name: 'EditContact',
		component: () => import('../views/EditContact'),
	},
	{ path: '*', component: () => import('../views/Error404') },
];

export default new Router({
	base: '/',
	routes,
	mode: 'history',
});
