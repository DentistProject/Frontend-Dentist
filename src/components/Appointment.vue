<template>
    
    <div  class="m-3">
    <div class=" mb-4">
        <div class="card">
            <div class="card-body text-white mailbox-widget pb-0" style="background-color: #567890;"> 
                <h2 class="text-white pb-3">Appointment Schedule</h2>
                    
                </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table custom-table">
        <thead class="table-light sticky-header">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Item</th>
            <th scope="col">Patient</th>
            <th scope="col">Doctor</th>
            <th scope="col">Action1</th>
            <th scope="col">Action2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iterm, index) in Iterms" :key="iterm.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ iterm.date }}</td>
            <td>{{ iterm.time }}</td>
            <td>{{ iterm.item }}</td>
            <td>{{ iterm.patient }}</td>
            <td>{{ iterm.doctor }}</td>
            
            <td>
              <button class="btn btn-primary" @click="updateIterms(iterm.id)">Update</button>
            </td>
            <td>
              <button class="btn btn-danger" @click="cancelIterms(iterm.id)">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showModal" class="modal" style="display:block;">
    <div class="modal-content  ">
      <span class="close" @click="closeModal">&times;</span>
      <h1 >Appointment Details</h1>
      <h5>Patient: {{ selectedItem.patient }}</h5>
      <h5>Item:{{ selectedItem.item}}</h5>
      <form @submit.prevent="submitUpdate">
        <div>
          <label>Date:</label>
          <input v-model="selectedItem.date" type="date" />
        </div>
        <div>
          <label>Time:</label>
          <input v-model="selectedItem.time" type="time" />
        </div>
        <div>
          <label>Doctor:</label>
          <input v-model="selectedItem.doctor" type="text" />
        </div>
        
        <button class ="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'AppointmentSchedule',
  data() {
    return {
      Iterms: [
        { id: 1, date: '2023-12-25', time: '08:50' ,item:'toothwash',patient:'jessie', doctor:'jack'},
        { id: 2, date: '2024-02-25', time: '10:30' ,item:'toothwash',patient:'zepei', doctor:'ikckqq'},
        { id: 3, date: '2023-02-11', time: '09:50' ,item:'toothwash',patient:'asim', doctor:'mack'},
        { id: 4, date: '2023-03-05', time: '12:10' ,item:'toothwash',patient:'nas', doctor:'lmnack'},

   
      ],
      showModal: false,
      selectedItem: null,
    };
  },
  methods: {
    cancelIterms(itermId) {
      
      this.Iterms = this.Iterms.filter(iterm => iterm.id !== itermId);
    },

    updateItem(itemId) {
      const item = this.items.find(item => item.id === itemId);
      if (item) { 
        item.item = 'updatedItem'; 
      }
    },

    updateIterms(itermId) {
      this.selectedItem = this.Iterms.find(iterm => iterm.id === itermId);
      if (this.selectedItem) {
        this.showModal = true;
      }
    },

    closeModal() {
      this.showModal = false;
    },

    submitUpdate() {
      
      this.showModal = false;
    },
  },
};
</script>

<style>
.sticky-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 20;
}

.text-center {
  margin-bottom: 32rem; 
}
.custom-table {
  min-width: 50vw; 
}


.table td,
.table th {
  padding: 1rem; 
}


.table th,
.table td {
  font-size: 1.25rem; 
}


/* for  appointemnt item modal detail */
.modal {
    display: block; 
    position: fixed; 
    z-index: 1000; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
}

.modal-content {
    background-color: #e2dcdc;
    margin: 15% auto; 
    padding: 30px;
    border: 1px solid #888;
    max-width: 600px; 
    min-width: 300px;
    width: 80%; 
}

.modal-content form div {
    margin-bottom: 25px; 
  }

  .modal-content input[type="date"],
  .modal-content input[type="time"],
  .modal-content input[type="text"] {
    width: 100%;
    padding: 8px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
  }

  .modal-content input[type="date"]:focus,
  .modal-content input[type="time"]:focus,
  .modal-content input[type="text"]:focus {
    outline: none;
    border-color: #4A90E2; 
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5); 
  }

  .modal-content h1 {
    margin-bottom: 20px; 
  }

  .modal-content h5 {
    margin-top: 5px; 
    margin-bottom: 20px; 
  }

.close {
    color: #aaa;
    float: right;
    font-size: 30px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
 

</style>

