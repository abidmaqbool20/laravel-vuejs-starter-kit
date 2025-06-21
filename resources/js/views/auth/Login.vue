<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6" elevation="10" max-width="420" rounded="xl">
      <v-card-title class="text-h5 font-weight-bold text-center">
        Welcome Back
      </v-card-title>

      <v-card-subtitle class="text-center mb-4">
        Sign in to continue to Deep & Dimensional
      </v-card-subtitle>

      <div v-if="auth.error" class="text-red text-sm mt-2">
        {{ auth.error }}
      </div>


      <v-form @submit.prevent="auth.login()">
        <v-text-field
          v-model="auth.login_form.email"
          label="Email"
          prepend-inner-icon="mdi-email"
          type="email"
          variant="outlined"
          density="comfortable"
          class="mb-4"
          required
        />

        <v-text-field
          v-model="auth.login_form.password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
          variant="outlined"
          density="comfortable"
          class="mb-4"
          required
        />

        <v-btn block color="primary" @click="auth.login()" :loading="auth.loading">
        Login
        </v-btn>
      </v-form>

      <div class="text-center mt-4 text-caption">
        Don’t have an account?
        <router-link to="/register" class="text-primary font-weight-medium">
          Register
        </router-link>
      </div>
    </v-card>
  </v-container>
</template>

<script setup> 
import { useAuthStore } from '@/stores/auth'; 
 import { useRouter } from 'vue-router';
const auth = useAuthStore();
auth.router = useRouter(); 
</script>
