import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DentistDashboard from '../components/DentistDashboard.vue'
import Login from '../components/Login.vue'
import Booking from '../components/Booking.vue'
import BookingAvailable from '../components/BookingAvailable.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/dentistdashboard',
        name: 'DentistDashboard',
        component: DentistDashboard
      }, 
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
      
         
            
    
  ]
})

export default router