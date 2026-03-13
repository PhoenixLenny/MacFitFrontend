<script setup>
</script>

<template>
  <v-container class="py-8">
    <div class="text-h5 font-weight-bold mb-6">Welcome Back 👋</div>

    <v-row>
      <v-col cols="12" md="6">
        <v-card rounded="xl" elevation="3">
          <v-img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            height="220"
            cover
          >
            <div class="fill-height d-flex align-end pa-4" style="background: linear-gradient(to top, rgba(0,0,0,0.6), transparent)">
              <div>
                <div class="text-h6 text-white font-weight-bold">Continue Your Streak 🔥</div>
                <div class="text-body-2 text-white">Pick up where you left off</div>
              </div>
            </div>
          </v-img>
          <v-card-actions>
            <v-btn color="#1976D2" variant="flat" rounded>Continue</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card rounded="xl" elevation="3">
          <v-img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
            height="220"
            cover
          >
            <div class="fill-height d-flex align-end pa-4" style="background: linear-gradient(to top, rgba(0,0,0,0.6), transparent)">
              <div>
                <div class="text-h6 text-white font-weight-bold">Start a New Streak ✨</div>
                <div class="text-body-2 text-white">Begin your next workout challenge</div>
              </div>
            </div>
          </v-img>
          <v-card-actions>
            <v-btn color="#1976D2" variant="flat" rounded>Start Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Quick stats row -->
    <v-row class="mt-4">
      <v-col cols="12" md="4">
        <v-card rounded="xl" color="#E3F2FD" elevation="1" class="text-center pa-4">
          <div class="text-h4 font-weight-bold text-primary">12</div>
          <div class="text-body-2 text-medium-emphasis">Workouts this month</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" color="#E3F2FD" elevation="1" class="text-center pa-4">
          <div class="text-h4 font-weight-bold text-primary">5 🔥</div>
          <div class="text-body-2 text-medium-emphasis">Day streak</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" color="#E3F2FD" elevation="1" class="text-center pa-4">
          <div class="text-h4 font-weight-bold text-primary">3</div>
          <div class="text-body-2 text-medium-emphasis">Active bundles</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
