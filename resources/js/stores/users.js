import { defineStore } from 'pinia';
import axios from 'axios';

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [],
        loading: false,
        error: null,
        form: {
            name: '',
            email: '',
            password: '',
        },
    }),

    actions: {
        async fetchUsers() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('/api/users');
                this.users = response.data.data || response.data;
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to load users';
            } finally {
                this.loading = false;
            }
        },

        async createUser() {
            this.loading = true;
            this.error = null;
            try {
                await axios.post('/api/users', this.form);
                this.resetForm();
                await this.fetchUsers(); // refresh list
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to create user';
            } finally {
                this.loading = false;
            }
        },

        resetForm() {
            this.form = {
                name: '',
                email: '',
                password: '',
            };
        },
    },
});
