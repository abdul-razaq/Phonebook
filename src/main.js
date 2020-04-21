import Vue from 'vue';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
	router,
	store,
	created() {
		const userData = localStorage.getItem('userData');
		if (userData) {
			const user = JSON.parse(userData)
			this.$store.commit('SET_TOKEN', user);
		}
	},
	render: (h) => h(App),
}).$mount('#app');
