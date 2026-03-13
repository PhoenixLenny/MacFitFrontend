<script setup>
import { ref, onMounted } from 'vue'

const userDetails = ref({})
const isLoggedIn = ref(false)

onMounted(() => {
  const details = JSON.parse(localStorage.getItem('userDetails') || '{}')
  userDetails.value = details
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
})
</script>

<template>
  <v-container style="background-color:#E3F2FD" max-width="50%" mt="12">
    <v-row>
        <v-col>
            <v-card>
                <v-img src="" class="h-50" cover></v-img>
                <v-card-title>{{ userDetails.name }}</v-card-title>
                <v-card-text>{{ userDetails.email }}</v-card-text>
                <v-card-text>{{ userDetails.phone }}</v-card-text>
                <v-card-text>{{ userDetails.gymLocation }}</v-card-text>
                  <div v-if="userDetails.subscription">
                    <v-card-text>Your current subscription is{{ userDetails.subscription.name }} at {{ userDetails.subription.price }}</v-card-text>
                  </div>
                  <div v-else>
                    <v-btn color="primary" variant="outlined" to="/bundles">Select a Bundle</v-btn>
                  </div>            
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

