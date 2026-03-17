<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showPassword = ref(false)
const password = ref('')
const username = ref('')
const loginError = ref('')

const rules = {
  required: value => !!value || 'Required.',
  min: value => (value && value.length >= 8) || 'Min 8 characters',
}

function login() {
  loginError.value = ''
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || 'null')

  if (!userDetails) {
    loginError.value = 'No account found. Please sign up first.'
    return
  }

  if (username.value === userDetails.email && password.value === userDetails.password) {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/home')
  } else {
    loginError.value = 'Invalid credentials. Try again.'
  }
}
</script>

<template>
  <v-container width="50%" class="text-center mt-12">
    <v-row>
      <v-col class="mb-12">
        <v-form @submit.prevent="login">
          <v-row>
            <v-col md="12">
              <v-icon color="#E3F2FD" icon="mdi-weight-lifter" size="x-large" class="mt-8"></v-icon>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div class="text-title-large font-weight-medium">Welcome to MacFit Gym</div>
            </v-col>
          </v-row>

          <v-row v-if="loginError">
            <v-col md="12">
              <v-alert type="error" variant="tonal" density="comfortable">{{ loginError }}</v-alert>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Username</div>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="username" variant="outlined"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Password</div>
            </v-col>
            <v-col md="6">
              <v-text-field
                v-model="password"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="showPassword ? 'text' : 'password'"
                variant="outlined"
                @click:append-inner="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <v-btn color="#1976D2" variant="elevated" width="50%" type="submit">Log In</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <div>
                New to MacFit?
                <router-link to="/signup">Create an Account</router-link>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
