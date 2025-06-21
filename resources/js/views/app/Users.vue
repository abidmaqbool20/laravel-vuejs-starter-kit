<template>
  <v-container fluid class="py-6">
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-6">
          <v-card-title>Create User</v-card-title>

          <v-text-field v-model="users.form.name" label="Name" class="mb-2" />
          <v-text-field v-model="users.form.email" label="Email" class="mb-2" />
          <v-text-field v-model="users.form.password" label="Password" type="password" class="mb-4" />

          <v-btn color="primary" @click="users.createUser" :loading="users.loading">Create</v-btn>

          <v-alert v-if="users.error" type="error" class="mt-3">
            {{ users.error }}
          </v-alert>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-6">
          <v-card-title>User List</v-card-title>
          <v-divider class="my-2" />

          <v-list>
            <v-list-item
              v-for="user in users.users"
              :key="user.id"
              :title="user.name"
              :subtitle="user.email"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';

const users = useUsersStore();

onMounted(() => {
  users.fetchUsers();
});
</script>
