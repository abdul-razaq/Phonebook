import Axios from 'axios';

const contactsInstance = Axios.create({
	baseURL: 'http://localhost:3000'
});

export default contactsInstance;
