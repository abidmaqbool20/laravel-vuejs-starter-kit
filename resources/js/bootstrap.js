import axios from 'axios';

window.axios = axios;

// Set default headers
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// If token exists in localStorage, attach it as Authorization header
const token = localStorage.getItem('token');

if (token) {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
