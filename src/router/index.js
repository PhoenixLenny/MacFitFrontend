import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/login.vue'
import SignUp from '@/components/signup.vue'
import HomePage from '@/components/homepage.vue'
import Profile from '@/components/profile.vue'
import Bundles from '@/components/bundles.vue'
import GymLocations from '@/components/GymLocations.vue'
import Admin from '@/components/admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/bundles',
      name: 'Bundles',
      component: Bundles,
    },
    {
      path: '/gym-locations',
      name: 'GymLocations',
      component: GymLocations,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
})

export default router