import authInstance from '../../apis/authInstance';
import router from '../../router';

const state = {
	status: '',
	message: '',
	token: null,
	authUser: null
};

const mutations = {
	SET_TOKEN(state, payload) {
		state.token = payload.token;
		state.authUser = payload.authUser;
	},
	SET_STATUS_AND_MESSAGE(state, payload) {
		state.status = payload.status;
		state.message = payload.message;
	},
	CLEAR_TOKEN(state) {
		state.token = null;
		state.authUser = null;
	}
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
			commit('SET_STATUS_AND_MESSAGE', {
				status: 'Error',
				message: 'Error registering user'
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
			commit('SET_STATUS_AND_MESSAGE', {
				status: 'Error',
				message: "Couldn't login"
			});
		}
	},
	logout({ commit, getters }) {
		authInstance.defaults.headers.common['Authorization'] =
			'Bearer ' + getters.getAuthToken;
		authInstance
			.post('/logout')
			.then(response => {
				const { status, message } = response.data;
				commit('SET_STATUS_AND_MESSAGE', { status, message });
				commit('CLEAR_TOKEN');
				router.replace('/login');
			})
			.catch(error => {
				commit('SET_STATUS_AND_MESSAGE', {
					status: 'Error',
					message: error.message
				});
			});
	}
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
	isAuthenticated(state) {
		return (
			state.token !== null &&
			state.authUser !== null &&
			state.status === 'Success'
		);
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
