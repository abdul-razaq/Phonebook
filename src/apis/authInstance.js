import Axios from 'axios';

const authInstance = Axios.create({
  baseURL: 'http://localhost:3000/auth',
});

export default authInstance;
