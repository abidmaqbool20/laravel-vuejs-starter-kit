<template>
  <v-app>
    <component :is="layout">
      <v-container fluid class="pa-6">
        <router-view />
      </v-container>
    </component>
  </v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import AuthLayout from '@/layouts/AuthLayout.vue';
import AppLayout from '@/layouts/AppLayout.vue';

const route = useRoute();

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'auth':
      return AuthLayout;
    default:
      return AppLayout;
  }
});
</script>
