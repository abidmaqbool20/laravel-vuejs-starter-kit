<template>
   <v-navigation-drawer
      app
      v-model="appSettingsStore.navBarDrawer"
      :mini-variant="mini"
      permanent
      class="pt-4"
    >
      <v-list density="compact" nav>

        <v-list-item
            to="/dashboard"
            title="Dashboard"
            prepend-icon="mdi-view-dashboard-outline"
        />
        <v-list-item
            to="/users"
            title="Users"
            prepend-icon="mdi-file-chart-outline"
        />
         
        <v-list-item
            title="Logout"
            prepend-icon="mdi-logout"
            @click="authStore.logout()"
        />

      </v-list>

      <!-- Collapse Button -->
      <template #append>
        <v-divider class="mb-2" />
        <v-btn icon variant="text" class="mx-auto mb-2" @click="appSettingsStore.toggleMiniNavBar()">
          <v-icon>{{ appSettingsStore.miniNavBar ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
        </v-btn>
      </template>
    </v-navigation-drawer>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useAppSettings } from '@/stores/appSettings';
const appSettingsStore =  useAppSettings(); 

const router = useRouter(); 
const mini = ref(false);

const authStore = useAuthStore()
authStore.router = useRouter();

 
</script>