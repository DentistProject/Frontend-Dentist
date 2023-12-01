c<template>
    <div class="container-fluid">
      <div class="row flex-nowrap">

        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 backgroud">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span class="fs-4 d-none d-sm-inline"><h4>Dentise DashBoard </h4></span>
             
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li class="nav-item">
                <a href="/" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>

              <li>
                <a  @click="showContent('appointment')" href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Appointment</span>
                </a>
              </li>

              <li>
                <a   @click="showContent('notification')" href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-chat-dots"></i> <span class="ms-1 d-none d-sm-inline">Notification</span>
                </a>
              </li>

              <li>
                <a  @click="showContent('introduction')" href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-person-circle"></i> <span class="ms-1 d-none d-sm-inline">Introduction</span>
                </a>
              </li>
              <li>
                <a  href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-box-arrow-right"></i> <span class="ms-1 d-none d-sm-inline">Sign out</span> 
                </a>
              </li>

            </ul>
          </div>
          
    </div>
          <div class="col py-3">
        
        <div v-if="currentContent === 'appointment'">
          <Appointment />
        </div>

        <div v-if="currentContent === 'notification'">
          <Notification />
        </div>

        <div v-if="currentContent === 'introduction'">
          <Introduction />
        </div>

    
    
      </div>

    </div>
    
    </div>
    
  </template>
  
  <script>
  import { ref } from 'vue';
 
  import Appointment from './Appointment.vue';
  import Notification from './Notification.vue';
  import Introduction from './Introduction.vue';
  


  
  export default {
    components: {
    
      Appointment,
      Notification,
      Introduction

    },
    setup() {
      const currentContent = ref('appointment');
  
      const showContent = (contentName) => {
        currentContent.value = contentName;
      };

      return {
        currentContent,
        showContent
      };
    },
        methods: {

            logout() {
                this.$router.push('/');
            }
    
    }
}


  </script>
  
  <style>
  .backgroud {
    background-color: #122430;
  }
  .backgroud a {
    color: white;
}

  </style>
  