const state = {
	token: null,
	authUser: null,
};

const mutations = {
	SET_TOKEN(state, payload) {
		state.token = payload.token;
		state.authUser = payload.authUser;
	},
	CLEAR_TOKEN(state) {
		state.token = null;
		state.user = null;
	},
};

const actions = {
	register({ commit }, userData) {
		// perform async action to register user
    // commit the SET_TOKEN mutation
    
	},
	login({ commit }, loginData) {
		// perform async action to login user
		// commit the SET_TOKEN mutation
	},
	logout({ commit }) {
		// perform async action to logout user
		// commit the CLEAR_TOKEN mutation
	},
};

const getters = {
	getAuthToken(state) {
		return state.token;
	},
	getAuthUser(state) {
		return state.authUser;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
