<template>
     <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="appSettingsStore.toggleNavBarDrawer()" />

      <v-toolbar-title>{{ appName }}</v-toolbar-title>

      <v-spacer />

      <!-- User Avatar on Right -->
      <v-btn icon>
        <v-avatar size="32">
          <v-img src="https://avatars.githubusercontent.com/u/1" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
</template>
<script setup> 
import { useAppSettings } from '@/stores/appSettings';
const appSettingsStore =  useAppSettings(); 

const appName = import.meta.env.VITE_APP_NAME ?? 'My App';
</script>