
<script setup>
  import { ref } from 'vue'
  import {useRouter} from "vue-router"

  const router = useRouter();

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)
  const username = ref(null)

  //login function

  function login () {

    //check user details
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    
    if (username.value == userDetails.email && password.value == userDetails.password){
    //proceed to homepage
    router.push('/homepage')
    localStorage.setItem("isLoggedIn", true);


  }else{
    console.log ('Invalid Credentials. Try Again')
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
                            <v-icon color="#E3F2FD"  icon="mdi-weight-lifter" size="x-large" class="mt-8"></v-icon>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div class="text-title-large font-weght-medium">Welcome to MacFit Gym</div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right"
                        v-model="username">
                            <div>Username</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field v-model="username"> 

                            </v-text-field>
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
                                >
                                
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <v-btn color="#1976D2" variant="elevated" width="50%"
                            @click="login">Log In</v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <div >  
                                New to MacFit? 
                                <router-link to="/signup">Create an Account  </router-link>
                                 
                            </div>
                        </v-col>
                    </v-row>
                </v-form>

            </v-col>
        </v-row>

    </v-container>
</template>