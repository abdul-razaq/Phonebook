import contactsInstance from '../../apis/contactsInstance';

const state = {
	contacts: [
		{
			socialAccounts: {
				twitter: 'mead',
				facebook: 'mead',
				instagram: 'andrew',
				linkedin: 'andrew',
				reddit: 'mead'
			},
			phoneNumbers: {
				home: 4443215654,
				work: 3125788756
			},
			addresses: {
				home: '18, Obinna street, Okerube, Ikotun. Lagos state',
				work: '213, Aminu Street, Victoria Island. Lagos state'
			},
			relationship: 'co-worker',
			dateAdded:
				'Sat Mar 21 2020 17:05:18 GMT+0100 (West Africa Standard Time)',
			_id: '5e767e15c47d702c6f93dbf1',
			firstname: 'Andrew',
			lastname: 'Mead',
			email: 'mead@gmail.com',
			nickname: 'meadie'
		},
		{
			socialAccounts: {
				twitter: 'angela',
				facebook: 'angela',
				instagram: 'Smith',
				linkedin: 'Smith',
				reddit: 'angela'
			},
			phoneNumbers: {
				home: 4443215654,
				work: 3125788756
			},
			addresses: {
				home: '18, Obinna street, Okerube, Ikotun. Lagos state',
				work: '213, Aminu Street, Victoria Island. Lagos state'
			},
			relationship: 'co-worker',
			dateAdded:
				'Sat Mar 21 2020 17:05:18 GMT+0100 (West Africa Standard Time)',
			_id: '5e767e15c47d702c6f93dbf2',
			firstname: 'Smith',
			lastname: 'angela',
			email: 'angela@gmail.com',
			nickname: 'angelaie'
		}
	]
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
	DELETE_CONTACTS(state) {
		state.contacts = [];
	}
};

const actions = {
	async getAllContacts({ commit }) {
		const response = await contactsInstance.get('contacts/');
		console.log(response.data);
	}
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
