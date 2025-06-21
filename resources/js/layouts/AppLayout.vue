<template>
  <v-app>
    <!-- TOP APP BAR --> 
    <TopBar />
    <!-- SIDEBAR NAVIGATION DRAWER -->
    <Sidebar />

    <!-- PAGE CONTENT -->
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>  

import Sidebar from '@/components/nav/Sidebar.vue';
import TopBar from '@/components/nav/TopBar.vue';
 
</script>
