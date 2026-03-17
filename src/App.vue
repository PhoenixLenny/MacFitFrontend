<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

const route = useRoute()
</script>

<template>
  <v-app>
    <NavBar />

    <v-main class="app-shell">
      <div
        class="page-shell"
        :class="{
          'page-shell--full': route.name === 'LandingPage',
        }"
      >
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
