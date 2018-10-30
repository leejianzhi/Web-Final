Vue.use(VeeValidate);
 var username = [
    'admin',
    'password',
    'administartor'
]
const newrule = {
  getMessage(field, params, data) {
      return (data && data.message) || 'Something went wrong';
  },
  validate(value) {
    return new Promise(resolve => {
      resolve({
        valid: username.includes(value.toLowerCase()) ? false : !! value,
        data: { message: `${value} has already been taken` }
      });
    });
  }
};
  VeeValidate.Validator.extend('checkuser',newrule);
    const signupForm = new Vue({
        el: '#signup-form',
        data: {
            name: '',
            email: '',
            username: '',
            password: ''
        },
      created: function(){
       
      },
        methods: {
            processForm: function() {

                this.$validator.validateAll().then((result) => {
                    if (result) {
                       
                       alert('Form validated succesfully');
                    }
                });


            }
        }

    });