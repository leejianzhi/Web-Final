Vue.use(VeeValidate);

const newrule = {
  getMessage(field, params, data) {
      return (data && data.message) || 'Something went wrong';
  },
  validate(value) {
    return new Promise(resolve => {
      resolve({
        valid: username.includes(value.toLowerCase()) ? false : !! value,
      });
    });
  }
};
  VeeValidate.Validator.extend('checkuser',newrule);
    const LoginForm = new Vue({
        el: '#login-form',
        data: {
            errors: [],
            email: null,
            password: null
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