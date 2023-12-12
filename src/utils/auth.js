import axios from 'axios';
import Router from '../router';

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
}



export const clearToken = () => {
  localStorage.clear();

}



export const login = (email, password) => {
    axios.post('http://localhost:8000/dentist/login/', {
        email: email,
        password: password
    })
    .then((response) => {
        const token = response.data.token;
        const dentistId = response.data.dentist.id;
        const dentistName = response.data.dentist.name;
        localStorage.setItem('token', token); // save token in the localStorage
        localStorage.setItem('dentistID', dentistId); // save user id in localStorage
        localStorage.setItem('dentistName',dentistName);
        console.log("dentistAuthToken:",response.data.token);  
        console.log("dentistInfor:",response.data.dentist);  
        Router.push('/dentistdashboard');
    })
    .catch((error) => {
        alert("Email or password is incorrect.")
        console.log("Error details:", error);
    });
}



export const logout = () => {
    if(confirm("Are you sure you want to logout?")){
      clearToken();
      
    
     
        Router.push('/'); //  back to login page
    }

}
