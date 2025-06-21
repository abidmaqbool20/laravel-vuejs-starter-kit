<template>
  <v-container fluid class="py-6">
    <!-- Welcome Header -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="2" class="pa-6">
          <h2 class="text-h5 font-weight-bold">Welcome to your Dashboard</h2>
          <p class="text-body-2 text-grey mt-1">
            Monitor, analyze, and manage your system from here.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Stats Cards -->
    <v-row class="mt-4" dense>
      <v-col cols="12" sm="6" md="4">
        <v-card color="primary" theme="dark" class="pa-4">
          <v-icon size="36" class="mb-2">mdi-account-multiple</v-icon>
          <div class="text-h6 font-weight-bold">1,240</div>
          <div class="text-caption text-grey-lighten-2">Active Users</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card color="deep-purple-darken-2" theme="dark" class="pa-4">
          <v-icon size="36" class="mb-2">mdi-file-chart</v-icon>
          <div class="text-h6 font-weight-bold">312</div>
          <div class="text-caption text-grey-lighten-2">Reports Today</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card color="teal-darken-2" theme="dark" class="pa-4">
          <v-icon size="36" class="mb-2">mdi-alert-circle-check</v-icon>
          <div class="text-h6 font-weight-bold">99%</div>
          <div class="text-caption text-grey-lighten-2">System Uptime</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Future: Charts, Tables, etc. -->
  </v-container>
</template>

<script setup>
// No script yet — can later use store, API, etc.
</script>
