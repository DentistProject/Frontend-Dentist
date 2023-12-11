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
        name: 'Login',
        component: Login
      },
      {
        path: '/dentistdashboard',
        name: 'DentistDashboard',
        component: DentistDashboard
      }, 
      {
       
        name: 'HomeView',
        component: HomeView
      }
      
         
            
    
  ]
})

export default router