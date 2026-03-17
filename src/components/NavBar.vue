<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/services/auth'

const router = useRouter()
const auth = useAuth()

const showAdmin = computed(() => auth.isAdmin.value)
const showLoggedIn = computed(() => auth.isLoggedIn.value)
const initials = computed(() => auth.initials.value)

function logout() {
  auth.logout()
  router.push('/')
}
</script>

<template>
  <v-app-bar color="#1565C0" elevation="3">
    <v-btn variant="text" to="/" class="text-h6 font-weight-bold pl-2" style="letter-spacing: 1px">
      💪 MacFit
    </v-btn>

    <v-spacer />

    <v-btn variant="text" to="/home" v-if="showLoggedIn">Home</v-btn>
    <v-btn variant="text" to="/bundles">Bundles</v-btn>
    <v-btn variant="text" to="/gym-locations">Our Gyms</v-btn>
    <v-btn variant="text" to="/admin" v-if="showAdmin">Admin</v-btn>

    <template v-if="showLoggedIn">
      <v-btn icon variant="text" class="ml-2">
        <v-avatar color="white" size="34">
          <span class="font-weight-bold" style="color: #1565C0">{{ initials }}</span>
        </v-avatar>
        <v-menu activator="parent" location="bottom end">
          <v-list density="compact" rounded="lg" min-width="160">
            <v-list-item prepend-icon="mdi-account" to="/profile" title="Profile" />
            <v-divider />
            <v-list-item prepend-icon="mdi-logout" title="Logout" @click="logout" base-color="error" />
          </v-list>
        </v-menu>
      </v-btn>
    </template>

    <template v-else>
      <v-btn variant="outlined" color="white" to="/login" class="ml-2">Login</v-btn>
    </template>
  </v-app-bar>
</template>
