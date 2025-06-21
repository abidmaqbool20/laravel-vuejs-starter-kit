<script setup> 
import { useAuthStore } from '@/stores/auth';
 import { useRouter } from 'vue-router';

const auth = useAuthStore();
auth.router = useRouter();
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card width="400" class="pa-4">
      <v-card-title>Register</v-card-title>

      <v-text-field label="Name" v-model="auth.registration_form.name" class="mb-2" />
      <v-text-field label="Email" v-model="auth.registration_form.email" class="mb-2" />
      <v-text-field label="Password" v-model="auth.registration_form.password" type="password" />

      <v-btn color="primary" block class="mt-4" @click="auth.register()" :loading="auth.loading">
        Register
      </v-btn>

      <div v-if="auth.error" class="text-red text-sm mt-2">
        {{ auth.error }}
      </div>
    </v-card>
  </v-container>
</template>
