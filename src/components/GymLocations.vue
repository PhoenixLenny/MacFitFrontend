<script setup>
import "leaflet/dist/leaflet.css"
import * as L from 'leaflet';
import { ref, onMounted } from 'vue';

const cbdMap = ref(null);
const westlandsMap = ref(null);
const kilimaniMap = ref(null);
const machakosMap = ref(null);

onMounted(()=> {
   cbdMap.value = L.map('cbd-map').setView([-1.2841, 36.8155], 14);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
   }).addTo(cbdMap.value);
   L.marker([-1.2841, 36.8155]).addTo(cbdMap.value);

    westlandsMap.value = L.map('westlands-map').setView([-1.2636, 36.8030], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(westlandsMap.value);
    L.marker([-1.2636, 36.8030]).addTo(westlandsMap.value);

    kilimaniMap.value = L.map('kilimani-map').setView([-1.2921, 36.7837], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(kilimaniMap.value);
    L.marker([-1.2921, 36.7837]).addTo(kilimaniMap.value);

    machakosMap.value = L.map('machakos-map').setView([-1.5177, 37.2634], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(machakosMap.value);
    L.marker([-1.5177, 37.2634]).addTo(machakosMap.value);
});
</script>

<template>
        <v-container class="mt-12">
               <v-row>
                       <v-col>
                                <div class="text-display-medium mb-6" style="color:#1565C0">Our Locations</div>
                       </v-col>
               </v-row>
               <v-row>
                       <v-col>
                                <v-card>
                                           <v-row>
                                                  <v-col md="4">
                                                        <v-card-title style="color:#1565C0">CBD</v-card-title>
                                                        <v-card-text>Nairobi Central Business District. Located along Moi Avenue, this branch is easily accessible by matatu and foot traffic.</v-card-text>
                                                  </v-col>
                                                  <v-col md="8">
                                                       <div id="cbd-map" style="height:30vh;">
                                                       </div>
                                                  </v-col>
                                           </v-row>

                                           <v-divider></v-divider>

                                           <v-row>
                                                  <v-col md="4">
                                                        <v-card-title style="color:#1565C0">Westlands</v-card-title>
                                                        <v-card-text>Our Westlands branch sits in the heart of the vibrant Westlands suburb, close to Sarit Centre and major offices.</v-card-text>
                                                  </v-col>
                                                  <v-col md="8">
                                                       <div id="westlands-map" style="height:30vh;">
                                                       </div>
                                                  </v-col>
                                           </v-row>

                                           <v-divider></v-divider>

                                           <v-row>
                                                  <v-col md="4">
                                                        <v-card-title style="color:#1565C0">Kilimani</v-card-title>
                                                        <v-card-text>Situated in the upscale Kilimani area, this branch serves residents and professionals in the Argwings Kodhek corridor.</v-card-text>
                                                  </v-col>
                                                  <v-col md="8">
                                                       <div id="kilimani-map" style="height:30vh;">
                                                       </div>
                                                  </v-col>
                                           </v-row>

                                           <v-divider></v-divider>

                                           <v-row>
                                                  <v-col md="4">
                                                        <v-card-title style="color:#1565C0">Machakos</v-card-title>
                                                        <v-card-text>Our Machakos branch brings MacFit to the Eastern region, located near Machakos town centre for easy access.</v-card-text>
                                                  </v-col>
                                                  <v-col md="8">
                                                       <div id="machakos-map" style="height:30vh;">
                                                       </div>
                                                  </v-col>
                                           </v-row>
                                </v-card>
                       </v-col>
               </v-row>
        </v-container>
</template>
