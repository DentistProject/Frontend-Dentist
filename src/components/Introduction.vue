<template>
   <form id="contact_form" class="row g-3">

   
    <!-- Text input-->
    <div class="mb-3 row">
      <label class="col-sm-1 col-form-label">Clinic </label>  
      <div class="col-sm-8">
        <input name="text" placeholder="Clinic name" class="form-control" type="text">
      </div>
    </div>
    
    <!-- Text input-->
    <div class="mb-3 row">
      <label class="col-sm-1 col-form-label">Mail</label>  
      <div class="col-sm-8">
        <input name="email" placeholder="E-Mail Address" class="form-control" type="text">
      </div>
    </div>
    
    <!-- Text input-->
    <div class="mb-3 row">
      <label class="col-sm-1 col-form-label">Phone </label>  
      <div class="col-sm-8">
        <input name="phone" placeholder="(845)555-1212" class="form-control" type="text">
      </div>
    </div>
    
    <!-- Text input-->
    <div class="mb-3 row">
      <label class="col-sm-1 col-form-label">Address</label>  
      <div class="col-sm-8">
        <input name="address" placeholder="Address" class="form-control" type="text">
      </div>
    </div>
    
    <!-- Text input-->
    <div class="mb-3 row">
      <label class="col-sm-1 col-form-label">City</label>  
      <div class="col-sm-8">
        <input name="city" placeholder="City" class="form-control" type="text">
      </div>
    </div>
    
    <!-- Select Basic -->
    <div class="mb-3 row"> 
      <label class="col-sm-1 col-form-label">State</label>
      <div class="col-sm-8">
        <select name="state" class="form-select">
          <option value=" " >Please select your state</option>
          <!-- Add other options here -->
        </select>
      </div>
    </div>

    <!-- Text input-->
    <div class="mb-3 row">
      <label class="col-sm-1 col-form-label">Zip Code</label>  
      <div class="col-sm-8">
        <input name="zip" placeholder="Zip Code" class="form-control" type="text">
      </div>
    </div>
    
   
    
   
    <!-- Text area -->
    <div class="mb-3 row">
      <label class="col-sm-1 col-form-label">Description</label>
      <div class="col-sm-8">
        <textarea class="form-control" name="comment" placeholder="Clinic Description"></textarea>
      </div>
    </div>
    
 
   
    <!-- Button -->
    <div class="mb-3 row">
      <div class="col-sm-10 offset-sm-2">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    
   

    </form>
    </template>
    
   


<style>

</style>