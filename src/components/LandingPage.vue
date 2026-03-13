<script setup>
</script>

<template>
  <!-- Hero Carousel -->
  <v-carousel height="480" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item cover src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80">
      <div class="fill-height d-flex align-center justify-center" style="background: rgba(0,0,0,0.45)">
        <div class="text-center text-white">
          <div class="text-h3 font-weight-bold mb-3">Train Hard. Live Better.</div>
          <div class="text-h6 mb-6">Your fitness journey starts here at MacFit.</div>
          <v-btn color="#1565C0" size="large" rounded to="/signup">Get Started</v-btn>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item cover src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80">
      <div class="fill-height d-flex align-center justify-center" style="background: rgba(0,0,0,0.45)">
        <div class="text-center text-white">
          <div class="text-h3 font-weight-bold mb-3">World-Class Equipment</div>
          <div class="text-h6 mb-6">Modern machines, expert coaches, real results.</div>
          <v-btn color="#1565C0" size="large" rounded to="/bundles">View Bundles</v-btn>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item cover src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80">
      <div class="fill-height d-flex align-center justify-center" style="background: rgba(0,0,0,0.45)">
        <div class="text-center text-white">
          <div class="text-h3 font-weight-bold mb-3">Join Our Community</div>
          <div class="text-h6 mb-6">Thousands of members. One goal — be your best.</div>
          <v-btn color="#1565C0" size="large" rounded to="/gym-locations">Our Gyms</v-btn>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>

  <!-- About Us -->
  <v-container style="background-color:#E3F2FD" max-width="100%" class="py-12">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="text-center px-8">
        <div class="text-h4 font-weight-bold mb-6">About Us</div>
        <p class="text-body-1 text-medium-emphasis mb-4">
          At MacFit, we believe health is more than a workout — it's a lifestyle. We empower individuals of all ages and fitness levels to discover their strength, build confidence, and embrace sustainable habits for long-term wellness.
        </p>
        <p class="text-body-1 text-medium-emphasis mb-6">
          From high-energy group classes to personalized training and nutrition guidance, our certified coaches are here to help you thrive. We're not just a gym — we're a community.
        </p>
        <v-btn color="#1565C0" variant="flat" rounded size="large">Learn More</v-btn>
      </v-col>
      <v-col cols="12" md="5">
        <v-img
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80"
          rounded="xl"
          height="360"
          cover
        />
      </v-col>
    </v-row>
  </v-container>

  <!-- Feature Cards -->
  <v-container class="py-10">
    <div class="text-h5 font-weight-bold text-center mb-8">Why Choose MacFit?</div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="3" height="100%">
          <v-img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
            cover height="200"
          />
          <v-card-title class="pt-4">World-Class Equipment</v-card-title>
          <v-card-text>Train with the latest machines and free weights in a modern, clean environment.</v-card-text>
          <v-card-actions>
            <v-btn color="#1976D2" variant="flat" rounded>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="3" height="100%">
          <v-img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
            cover height="200"
          />
          <v-card-title class="pt-4">Expert Personal Trainers</v-card-title>
          <v-card-text>Our certified coaches tailor every session to help you reach your goals faster.</v-card-text>
          <v-card-actions>
            <v-btn color="#1976D2" variant="flat" rounded>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="3" height="100%">
          <v-img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
            cover height="200"
          />
          <v-card-title class="pt-4">Group Classes & Community</v-card-title>
          <v-card-text>Join high-energy classes and a supportive community that keeps you motivated.</v-card-text>
          <v-card-actions>
            <v-btn color="#1976D2" variant="flat" rounded>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Reviews -->
  <v-container style="background-color:#F5F5F5" max-width="100%" class="py-10">
    <div class="text-h5 font-weight-bold text-center mb-8">What Our Members Say</div>
    <v-row justify="center">
      <v-col cols="12" md="3" v-for="review in reviews" :key="review.name">
        <v-card color="white" rounded="xl" elevation="2" height="100%">
          <v-card-text>
            <div class="font-weight-bold mb-2">{{ review.name }}</div>
            <div class="text-body-2 text-medium-emphasis mb-3">"{{ review.text }}"</div>
            <v-rating :length="5" :size="20" :model-value="review.stars" active-color="amber" readonly density="compact" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Contact Us -->
  <v-container style="background-color:#1565C0" max-width="100%" class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center text-white">
        <div class="text-h5 font-weight-bold mb-4">Contact Us</div>
        <v-divider color="white" class="mb-4" />
        <div class="text-body-1 mb-2">📞 0703 034 000 &nbsp;|&nbsp; ✉️ info@strathmore.edu</div>
        <div class="text-body-1 mb-2">🕐 Monday–Friday, 8:00 am – 5:00 pm (EAT)</div>
        <div class="text-body-1">📍 Madaraka Estate, Ole Sangale Road, Nairobi, Kenya</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        { name: 'James M.', stars: 5, text: 'MacFit is the best gym I have ever been to. Amazing atmosphere and great trainers!' },
        { name: 'Aisha K.', stars: 4, text: 'Good gym overall. The group classes are really fun and the staff is so friendly.' },
        { name: 'Brian O.', stars: 3, text: 'Decent facilities. Could use more equipment variety but I keep coming back!' },
        { name: 'Fatuma S.', stars: 5, text: 'Great value for money. The membership bundles are very affordable for students.' },
      ]
    }
  }
}
</script>
