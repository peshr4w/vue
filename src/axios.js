import axios from 'axios';
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = 'X_XSRF_TOKEN'
axios.defaults.xsrfCookieName = 'X-XSRF-TOKEN'
export default axios