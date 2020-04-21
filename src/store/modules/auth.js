import authInstance from '../../apis/authInstance';
import router from '../../router';

const state = {
	status: '',
	message: '',
	token: null,
	authUser: null,
};

const mutations = {
	SET_TOKEN(state, payload) {
		state.token = payload.token;
		state.authUser = payload.authUser;
		localStorage.setItem('userData', JSON.stringify(payload));
		authInstance.defaults.headers.common[
			'Authorization'
		] = `Bearer ${payload.token}`;
	},
	SET_STATUS_AND_MESSAGE(state, payload) {
		state.status = payload.status;
		state.message = payload.message;
	},
	CLEAR_TOKEN() {
		localStorage.removeItem('userData');
		location.reload();
	},
};

const actions = {
	async register({ commit }, userData) {
		try {
			const response = await authInstance.post('/register', userData);
			const { status, message, userId, token } = response.data;
			commit('SET_TOKEN', { token, authUser: userId });
			commit('SET_STATUS_AND_MESSAGE', { status, message });
			router.replace('/');
		} catch (error) {
			const { status, message } = error.response.data;
			commit('SET_STATUS_AND_MESSAGE', {
				status,
				message,
			});
		}
	},
	async login({ commit }, loginData) {
		try {
			const response = await authInstance.post('/login', loginData);
			const { status, message, token, userId } = response.data;
			commit('SET_TOKEN', { token, authUser: userId });
			commit('SET_STATUS_AND_MESSAGE', { status, message });
			router.replace('/');
		} catch (error) {
			const { status, message } = error.response.data;
			commit('SET_STATUS_AND_MESSAGE', {
				status,
				message,
			});
		}
	},
	logout({ commit, getters }) {
		authInstance
			.post('/logout')
			.then((response) => {
				const { status, message } = response.data;
				commit('SET_STATUS_AND_MESSAGE', { status, message });
				commit('CLEAR_TOKEN');
				router.replace('/login');
			})
			.catch((error) => {
				const { status, message } = error.response.data;
				commit('SET_STATUS_AND_MESSAGE', {
					status,
					message,
				});
			});
	},
};

const getters = {
	getAuthToken(state) {
		return state.token;
	},
	getAuthUser(state) {
		return state.authUser;
	},
	getStatusAndMessage(state) {
		return { status: state.status, message: state.message };
	},
	isLoggedIn(state) {
		return state.token !== null && state.authUser !== null;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
