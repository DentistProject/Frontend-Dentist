import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DentistDashboard from '../components/DentistDashboard.vue'
import Login from '../components/Login.vue'
//import Booking from '../components/Booking.vue'
//import BookingAvailable from '../components/BookingAvailable.vue'
import { getToken } from '../utils/auth'

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
        component: DentistDashboard,
        meta: {requiresAuth: true}
      }, 
      {
       
        name: 'HomeView',
        component: HomeView
      }
      
         
            
    
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
      // Check if the user is authenticated
      const token = getToken();

      if (!token) {
          return next('/'); // Redirect to the login page if not authenticated
      }

      // Continue to the protected route
      next();
  } else {
      next(); // Allow access to public routes
  }
});

function isUserLoggedIn(to, from, next) {
  if (!getToken()) {
      next();
  } else {
      next('/dentistdashboard');
  }
}


export default router