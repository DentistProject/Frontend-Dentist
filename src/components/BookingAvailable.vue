<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <input type="text" v-model="search" placeholder="Search by patient name">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>Dentist</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="booking in filteredBookings" :key="booking._id">
                            <td>{{ booking.patientName }}</td>
                            <td>{{ booking.dentistName }}</td>
                            <td>{{ booking.date }}</td>
                            <td>{{ booking.time }}</td>
                            <td>{{ booking.message }}</td>
                            <td>{{ booking.status }}</td>
                            <td> <button class="btn btn-danger" @click="cancelBooking(booking)">Cancel</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: 'booking',

    mounted() {
        this.getAllBookings();
    },
    data() {
        return {
            bookings: [],
            search: '',
        }
    },
    computed: {
        filteredBookings() {
            return this.bookings.filter(booking => booking.patientName.toLowerCase().includes(this.search.toLowerCase()));
        }
    },
    methods: {
        getAllBookings() {
            let dentistID = localStorage.getItem('dentistID');
            console.log(dentistID)
            axios.get(`http://127.0.0.1:8081/api/v1/bookings/dentist/available/${dentistID}`)
                .then((response) => {
                    this.bookings = response.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        cancelBooking(booking) {
            console.log(booking)
            console.log(this.dentistName)
            axios.patch(`http://127.0.0.1:8081/api/v1/bookings/${booking._id}`, {
                status: 'CANCELED'

                })
                .then(() => {
                    axios.post('http://127.0.0.1:8081/api/v1/bookings/', {
                        patientName: '',
                        dentistName: booking.dentistName,
                        dentistID: booking.dentistID,
                        date: booking.date,
                        time: booking.time,
                        status: 'AVAILABLE'
                    })
                    .then(() => {
                        this.getAllBookings();
                    })


                })
                .catch((error) => {
                    console.error(error);
                });
        }

    },

}

</script>
<style scoped>
.button-space {
    margin-right: 15px;
}
</style>
