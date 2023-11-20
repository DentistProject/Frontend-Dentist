import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DentistDashboard from '../components/DentistDashboard.vue'
import Appointment from '../components/Appointment.vue'
import Introduction from '../components/Introduction.vue'

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
        path: '/appointment',
        name: 'Apponintment',
        component: Appointment
      }, 
      {
        path: '/introduction',
        name: 'Introduction',
        component: Introduction
      }
         
            
    
  ]
})

export default router