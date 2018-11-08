<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css'>
    <link rel="stylesheet" href="css/UI.css">
    <link rel="stylesheet" href="css/nav-wizard.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="register.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.9/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vee-validate@latest/dist/vee-validate.js"></script>
 
    <title>Registration</title>
</head>


<body>
<div class="re-form">
      <div class="container">
          <div class="row">
              <div class="col-sm-8 offset-sm-2">
                  <div>
                    <!--Nav Wizard-->
                    <ul class='nav nav-wizard'>
                      <li class='active'><a href='register.html' data-toggle="tab">Step 1 - Account Info</a></li>
                        <li><a href='pInterest.html' data-toggle="tab">Step 2 - Personal Info</a></li>
                        <li><a href='#step3' data-toggle="tab">Step 3 - Completed </a></li>
                        </ul>
                        <!--Register Form-->
                        <form @submit.prevent="handleSubmit">
                          <h2 class="text-center">Create an account</h2> 
                          <div class="form-group">
                            <label for="firstName">First Name</label>
                                <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                          <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
                          </div>
                          <div class="form-group">
                              <label for="lastName">Last Name</label>
                              <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                              <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
                          </div>
                          <div class="form-group">
                              <label for="email">Email</label>
                              <input type="email" v-model="user.email" v-validate="'required|email'" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                              <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                          </div>
                          <div class="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                              <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                          </div>
                          <div class="form-group">
                              <button href='pInterest.html' class="btn btn-primary">Next</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>


</body>
</html>

</template>



<style type="text/css">
.re-form {
        width: 960px;
        margin: 100px auto;
    }
    .re-form form {
        margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 75px;
    }
    .re-form h2 {
        margin: 0 0 15px;
    }
    .re-form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }

</style>



<script type="text/javascript">
export default {
    name: 'app',
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        }
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
                }
            });
        }
    }
};


</script>