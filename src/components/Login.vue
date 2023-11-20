<template>
<div class="register-photo">
  <div class="form-container">
      <div class="image-holder"></div>
      
      <form method="post">
          <h2 class="text-center"><strong>Welcome Dentist System!</strong></h2>
          <h2 class="text-center"><strong>Log In</strong></h2>

          <div class="form-group"><input class="form-control" type="Username" name="Username" placeholder="Username"></div>
          <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"></div>
          <div class="form-group">
             
          </div>
          <div class="form-group"><button class="btn btn-success btn-block btn-info bt" type="submit">Login</button></div>
      </form>
  </div>
</div>
  </template>
  
  
  <style>
  .register-photo {
    display: flex;
    align-items: center;
    justify-content: center; 
    min-height: 100vh;
    background: #dfe8f0;
    padding: 50px 0;
}

.register-photo form .form-group {
    margin-bottom: 20px; 
}


.register-photo .image-holder {
    display: table-cell;
    width: auto;
    height: 100%;
    background: url('../assets/52.png') no-repeat center center fixed;
   
}

.register-photo .form-container {
    display: table;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1)
}

.register-photo form {
    display: table-cell;
    width: 550px;
    height: 550px;
    background-color: #ffffff;
    padding: 60px 60px;
    color: #505e6c
}

@media (max-width:991px) {
    .register-photo form {
        padding: 40px
    }
}

.register-photo form h2 {
    font-size: 25px;
    line-height: 1.5;
    margin-bottom: 30px

}

.register-photo form .form-control {
    background: transparent;
    border: none;
    color:  #416366;
    border-bottom: 1px solid #dfe7f1;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    color: inherit;
    text-indent: 0px;
    height: 40px
}

.register-photo form .form-check {
    font-size: 15px;
    line-height: 30px
 
}

.register-photo form .btn-primary {
    background: #61acb3 ;
    border: none;
    border-radius: 25px;
    padding: 25px;
    box-shadow: none;
    margin-top: 35px;
    text-shadow: none;
    outline: none !important
}

.register-photo form .btn-primary:hover,
.register-photo form .btn-primary:active {
    background:#58b0b8;
   
}

.register-photo form .btn-primary:active {
    transform: translateY(1px);
    
}
.bt{
  width: 400px;
}


</style>  
  