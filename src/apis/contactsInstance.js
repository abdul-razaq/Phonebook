import Axios from 'axios';

import store from '../store';

Axios.defaults.headers.commons['Authorization'] =
	'Bearer ' + store.state.token;

export default Axios.create({
	baseURL: 'http://localhost:3000/'
});
