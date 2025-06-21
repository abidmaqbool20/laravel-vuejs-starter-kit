import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        loading: false,
        error: null,

        registration_form: {
            name: null,
            email: null,
            password: null,
        },

        login_form: {
            email: null,
            password: null,
        },
    }),

    actions: {
        async login(router) {
            this.loading = true;
            this.error = null;

            try {
                const response = await axios.post('/api/login', this.login_form);

                this.token = response.data.token;
                this.user = response.data.user ?? null;

                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', this.token);
                this.resetForm('login_form');

                this.router.push('/dashboard');
            } catch (err) {
                this.error = err.response?.data?.message || 'Login failed';
            } finally {
                this.loading = false;
            }
        },

        async register() {
            this.loading = true;
            this.error = null;

            try {
                const response = await axios.post('/api/register', this.registration_form);

                this.token = response.data.token;
                this.user = response.data.user ?? null;

                localStorage.setItem('user', JSON.stringify(this.user));

                localStorage.setItem('token', this.token);
                this.resetForm('registration_form');

                this.router.push('/dashboard');
            } catch (err) {
                this.error = err.response?.data?.message || 'Registration failed';
            } finally {
                this.loading = false;
            }
        },

        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];

            this.router.push('/login');
        },

        resetForm(formKey) {
            if (!this[formKey]) return;
            Object.keys(this[formKey]).forEach(key => {
                this[formKey][key] = null;
            });
        },
    },
});
