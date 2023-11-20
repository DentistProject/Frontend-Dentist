<template>
    <template>
    <div class="m-3">
        <div class="mb-4">
            <div class="card">
                <div class="card-body text-white mailbox-widget pb-0" style="background-color: #567890">
                    <h2 class="text-white pb-3">Notification</h2>
                </div>
            <div class="container px-5 my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card border-0 rounded-3 shadow-lg">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <div class="h1 fw-light">Sent Message</div>

                <form id="contactForm" >

                    <!-- Name Input -->
                    <div class="form-floating mb-3">
                        <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                        <label for="name">Name</label>
              
                    </div>

                    <!-- Email Input -->
                    <div class="form-floating mb-3">
                        <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                        <label for="emailAddress">Email Address</label>
              
                    </div>

            <!-- Message Input -->
                 <div class="form-floating mb-3">
                    <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;" data-sb-validations="required"></textarea>
                    <label for="message">Message</label>
                    
            </div>

            <!-- Submit button -->
                <div class="d-grid">
                    <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</div>
               
</div>
</div>
</div>
</div>
</template>

