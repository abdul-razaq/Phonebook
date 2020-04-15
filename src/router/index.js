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
		beforeEnter(to, from, next) {
			const isLoggedin = JSON.parse(localStorage.getItem('userData')).token;
			console.log(isLoggedin);
			const { token, authUser } = store.state.auth;
			if (!isLoggedin) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About'),
		beforeEnter(to, from, next) {
			const { token, authUser } = store.state.auth;
			if (!token && !authUser) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/auth/Register')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/auth/Login')
	},
	{
		path: '/contacts/new',
		name: 'NewContacts',
		component: () => import('../views/NewContact'),
		beforeEnter(to, from, next) {
			const { token, authUser } = store.state.auth;
			if (!token && !authUser) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '/contacts/:id',
		props: true,
		name: 'ContactDetails',
		component: () => import('../views/ContactDetails'),
		beforeEnter(to, from, next) {
			const { token, authUser } = store.state.auth;
			if (!token && !authUser) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '/contacts/edit/:id',
		props: true,
		name: 'EditContact',
		component: () => import('../views/EditContact'),
		beforeEnter(to, from, next) {
			const { token, authUser } = store.state.auth;
			if (!token && !authUser) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '*',
		component: () => import('../views/Error404'),
		beforeEnter(to, from, next) {
			const { token, authUser } = store.state.auth;
			if (!token && !authUser) {
				next('/login');
			} else {
				next();
			}
		}
	}
];

export default new Router({
	base: '/',
	routes,
	mode: 'history'
});
