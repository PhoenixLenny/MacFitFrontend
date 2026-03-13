<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router"

const router = useRouter();

const showBundleDialog = ref(false)
const isLoggedIn = localStorage.getItem("isLoggedIn")
const selectedBundle = ref(null)
const selectedPrice = ref(null)

function showBundle(name, price){
  if(isLoggedIn){
    selectedBundle.value = name
    selectedPrice.value = price
    showBundleDialog.value = true //open pop up
  }else{
    router.push('/login')
  }
}
function subscribe(){
   const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}')
   userDetails.subscription = {
    name: selectedBundle.value,
    price: selectedPrice.value
   }
  localStorage.setItem('userDetails', JSON.stringify(userDetails))
   showBundleDialog.value = false
  }

</script>

<template>
    <v-container style="background-color:#E3F2FD" max-width="100%">
        <v-row>
            <v-col> 
                <div class="text-display-medium mb-12">Bundles & Pricing</div>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="3">
                <v-card class="text-center" @click="showBundle">
                    <v-icon color="#1565C0" icon="mdi-clock-time-four" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">Daily Pass</v-card-title>
                    <v-card-text>500 Ksh</v-card-text>
                </v-card> 
            </v-col>

            <v-col md="3">
                <v-card class="text-center" @click="showBundle">
                    <v-icon color="#1565C0" icon="mdi-calendar-blank-outline" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">Monthly Pass</v-card-title>
                    <v-card-text>5,000 Ksh</v-card-text>
                </v-card> 
            </v-col>
            
            <v-col md="3">
                <v-card class="text-center" @click="showBundle">
                    <v-icon color="#1565C0" icon="mdi-weight-lifter" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">3-month Pass</v-card-title>
                    <v-card-text>12,000 Ksh</v-card-text>
                </v-card> 
            </v-col>

            <v-col md="3">
                <v-card class="text-center" @click="showBundle">
                    <v-icon color="#1565C0" icon="mdi-gymnastics" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">6-Month Pass</v-card-title>
                    <v-card-text>20,000 Ksh</v-card-text>
                </v-card> 
            </v-col>
            
        </v-row>

        <v-row>
            <v-col md="12">

            <v-col md="3">
                <v-card class="text-center" @click="showBundle" > 
                    <v-icon color="#1565C0" icon="mdi-clock-time-four" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">Daily Pass</v-card-title>
                    <v-card-text>500 Ksh</v-card-text>
                </v-card> 
            </v-col>
            </v-col>
        </v-row>
    </v-container>

    <!--What's Included-->

    <v-container style="background-color:#E3F2FD" max-width="100%">
        <v-row>
            <v-col md="12">
                <div class="text-display-medium mb-12">What Is In Our Bundles?</div>

            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card class="text-center" hover >
                    <v-icon color="#1565C0" icon="mdi-weight-lifter" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">On-Demand Training</v-card-title>
                    <v-card-text> Can’t make it to the floor? Take our expert-led classes with you via our digital library, featuring live streams and habit-tracking tools.</v-card-text>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#1565C0" icon="mdi-food-apple" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">Nutrition Concierge</v-card-title>
                    <v-card-text>Master your diet with custom macro-calculations and exclusive discounts on premium meal-prep and our in-house fuel bar.</v-card-text>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card class="text-center" hover >
                    <v-icon color="#1565C0" icon="mdi-bottle-tonic-plus" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">Recovery Lab</v-card-title>
                    <v-card-text>Access professional-grade tools like infrared saunas, cold plunges, and percussion therapy to slash your soreness and bounce back faster.</v-card-text>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#1565C0" icon="mdi-face-recognition" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#1565C0">Biometric Tracking</v-card-title>
                    <v-card-text>Go beyond the scale with 3D body scanning and quarterly consultations. We map your progress so you know exactly how your body is changing.</v-card-text>
                </v-card>
            </v-col>
         </v-row>

        <v-row>
        </v-row>
    </v-container>

    <!--How t Join-->
    <v-container style="background-color:#E3F2FD" max-width="100%" class="mt-12">
        <v-row>
            <div class="text-display-medium mt-8">How to Join MacFit:</div>
        </v-row>

        <v-row>
            <v-list>
                <v-list-item>1. Select Yor Preffered Gym</v-list-item>
                <v-list-item>2. Fill in the online form</v-list-item>
                <v-list-item>3. Complete the Payment</v-list-item>
                <v-list-item>4. Visit the Gym to activate account</v-list-item>
            </v-list>
        </v-row>

    </v-container>
     <v-dialog v-model="showBundleDialog" max-width="600" >

      <v-card prepend-icon="mdi-account" title="Subscribe to Bundle" >
        <v-card-text>
          You are about to subscribe to {{ selectedBundle }} at {{ selectedPrice }}. Click on the button below to complete payment
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
         <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="showBundleDialog = false" ></v-btn>
          <v-btn color="primary" variant="tonal" @click="subscribe()" >Subscribe</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>