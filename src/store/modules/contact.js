import contactsInstance from '../../apis/contactsInstance';
import store from '../../store';
import router from '../../router';

const state = {
	contacts: [],
	status: '',
	message: ''
};

const mutations = {
	SET_CONTACTS(state, contacts) {
		state.contacts = contacts;
	},
	DELETE_CONTACT(state, contactId) {
		const contactToDeleteIndex = state.contacts.findIndex(
			contact => contact._id === contactId
		);
		if (contactToDeleteIndex !== -1) {
			state.contacts.splice(contactToDeleteIndex, 1);
		}
	},
	// Delete contacts by relationship, i.e filter out all contacts that have a particular relationship
	// DELETE_CONTACTS_BY_RELATIONSHIP() {},
	DELETE_ALL_CONTACTS(state) {
		state.contacts = [];
	},
	SET_STATUS_AND_MESSAGE(state, payload) {
		state.status = payload.status;
		state.message = payload.message;
	}
};

const actions = {
	async getAllContacts({ commit }) {
		try {
			contactsInstance.defaults.headers.common['Authorization'] =
				'Bearer ' + store.getters.getAuthToken;
			const response = await contactsInstance.get('/contacts');
			if (!response.data) {
				commit('SET_CONTACTS', []);
			} else {
				commit('SET_CONTACTS', response.data.data);
			}
		} catch (error) {
			const { status, message } = error.response.data;
			commit('SET_STATUS_AND_MESSAGE', { status, message });
		}
	},

	async addNewContact({ commit, dispatch, state }, contactData) {
		try {
			contactsInstance.defaults.headers.common['Authorization'] =
				'Bearer ' + store.getters.getAuthToken;
			const response = await contactsInstance.put('/contacts', contactData);
			const { status, message } = response.data;
			commit('SET_STATUS_AND_MESSAGE', { status, message });
			await dispatch('getAllContacts');
			router.push('/');
		} catch (error) {
			const { status, message } = error.response.data;
			commit('SET_STATUS_AND_MESSAGE', { status, message });
		}
	},
};

const getters = {
	getAllContacts(state) {
		return state.contacts;
	},
	getTotalContacts(state) {
		return state.contacts.length;
	},
	getContact(state) {
		return contactId => {
			return state.contacts.find(contact => contact._id === contactId);
		};
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
