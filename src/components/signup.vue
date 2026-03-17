<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const phone = ref('')
const gender = ref('')
const dob = ref(null)
const gymLocations = ref('')
const password = ref('')
const confirmPassword = ref('')
const formError = ref('')

const rules = {
  required: value => !!value || 'Required.',
  min: value => (value && value.length >= 8) || 'Min 8 characters',
  passwordMatch: () => password.value === confirmPassword.value || 'Passwords must match',
}

function signUp() {
  formError.value = ''

  if (
    !firstname.value ||
    !lastname.value ||
    !email.value ||
    !phone.value ||
    !gender.value ||
    !dob.value ||
    !gymLocations.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    formError.value = 'Please fill in all fields.'
    return
  }

  if (password.value.length < 8) {
    formError.value = 'Password must be at least 8 characters.'
    return
  }

  if (password.value !== confirmPassword.value) {
    formError.value = 'Passwords must match.'
    return
  }

  const userDetails = {
    name: `${firstname.value} ${lastname.value}`.trim(),
    firstname: firstname.value.trim(),
    lastname: lastname.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    gender: gender.value,
    dob: dob.value,
    gymLocations: gymLocations.value,
    password: password.value,
  }

  try {
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
    localStorage.setItem('isLoggedIn', 'false')
    router.push('/login')
  } catch (err) {
    console.error('Sign up process failed', err)
    formError.value = 'Sign up failed. Please try again.'
  }
}
</script>

<template>
  <v-container width="50%" class="text-center mt-12">
    <v-row>
      <v-col class="mb-12">
        <v-form @submit.prevent="signUp">
          <v-row>
            <v-col md="12">
              <v-img src="/favicon.ico" width="40%" height="40%"></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div class="text-title-large font-weight-medium">Sign Up</div>
            </v-col>
          </v-row>

          <v-row v-if="formError">
            <v-col md="12">
              <v-alert type="error" variant="tonal" density="comfortable">{{ formError }}</v-alert>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>First Name</div>
            </v-col>
            <v-col md="6">
              <v-text-field variant="outlined" v-model="firstname"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Last Name</div>
            </v-col>
            <v-col md="6">
              <v-text-field variant="outlined" v-model="lastname"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>E-mail</div>
            </v-col>
            <v-col md="6">
              <v-text-field variant="outlined" type="email" v-model="email"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Phone</div>
            </v-col>
            <v-col md="6">
              <v-text-field variant="outlined" type="tel" v-model="phone"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Gender</div>
            </v-col>
            <v-col md="6">
              <v-radio-group inline v-model="gender">
                <v-radio label="Male" value="male"></v-radio>
                <v-radio label="Female" value="female"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Date of Birth</div>
            </v-col>
            <v-col md="6">
              <v-date-input variant="outlined" v-model="dob"></v-date-input>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Gym Location</div>
            </v-col>
            <v-col md="6">
              <v-select
                label="Select"
                :items="['CBD', 'Westlands', 'Kilimani', 'Machakos']"
                v-model="gymLocations"
                variant="outlined"
              ></v-select>
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
            <v-col md="6" class="text-title-large font-weight-medium text-right">
              <div>Confirm Password</div>
            </v-col>
            <v-col md="6">
              <v-text-field
                v-model="confirmPassword"
                :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min, rules.passwordMatch]"
                :type="showConfirmPassword ? 'text' : 'password'"
                variant="outlined"
                @click:append-inner="showConfirmPassword = !showConfirmPassword"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <v-btn color="#1976D2" variant="elevated" width="50%" type="submit">Sign Up</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <div>
                Already have an Account?
                <router-link to="/login">Log In</router-link>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
