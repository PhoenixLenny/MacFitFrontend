<script setup>
  import { ref } from 'vue'

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
    passwordMatch: () => password === confirmPassword || 'Passwords must match'
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)
  

  const show1confirm= ref(false)
  const confirmPassword = ref(null)

  //models
  const firstname = ref(null)
  const lastname = ref(null)
  const email = ref(null)
  const phone = ref(null)
  const gender = ref(null)
  const dob = ref(null)
  const gymLocations = ref(null)


  function signUp () {
    //creat user object
  const userDetails = {
    name: firstname.value + lastname.value ,
    email: email.value ,
    phone: phone.value ,
    gender: gender.value ,
    dob: dob.value ,
    gymLocations: gymLocations.value ,
    password: password.value

  }

  //store this data

    try{
        localStorage.setItem('userDetails', JSON.stringify(userDetails))

    }
    catch (err){ console.error('Sign Up Porcess Failed', err)
    
    }

}

  
 

</script>

<template>
    <v-container width="50%" class="text-center mt-12" >
        <v-row>
            <v-col class="mb-12">
                <v-form>
                    <v-row>
                        <v-col md="12">
                            <v-img src="/favicon.ico" width="40%" height="40%"></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div class="text-title-large font-weght-medium" 
                            variant="elevated"
                            
                            >Sign Up</div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>First Name</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="firstname"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Last Name</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="lastname"> 
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>E-mail</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="email"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Phone</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" type="number" v-model="phone"> 

                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
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
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Date of Birth</div>
                        </v-col>
                        <v-col md="6">
                        <v-date-input 
                            variant="outlined" 
                            v-model="dob"
                            ></v-date-input>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Gym Location</div>
                        </v-col>
                        <v-col md="6">
                            <v-select
                                label="Select"
                                :items="['', 'CBD', 'Westlands', 'Kilimani', 'Machakos']"
                                v-model="gymLocations"
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Password</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field 
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                variant="outlined"
                                label="Normal with hint text"
                                name="input-10-1"
                                >
                                
                            </v-text-field>
                        </v-col>
                    </v-row>

                                        <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Confirm Password</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field 
                                v-model="confirmPassword"
                                :append-icon="show1confirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch]"
                                :type="show1confirm ? 'text' : 'password'"
                                variant="outlined"
                                label="Normal with hint text"
                                name="input-10-1"
                                >
                                
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <v-btn color="#1976D2" variant="elevated" width="50%"
                            @click="signUp"
                            >Sign Up</v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <div>Already have an Account? 
                                <router-link to="/login">Log In</router-link>
                            </div>
                        </v-col>
                    </v-row>
                </v-form>

            </v-col>
        </v-row>

    </v-container>
</template>