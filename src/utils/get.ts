import axios from 'axios';
axios.defaults.withCredentials = true;
const instance = axios.create({
    method:"get",
});

export default instance;
