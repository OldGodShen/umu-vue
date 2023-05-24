import axios from 'axios';
axios.defaults.withCredentials = true;
const instance = axios.create({
    method:"post",
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    withCredentials:true
});

export default instance;