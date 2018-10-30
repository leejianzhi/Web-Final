Vue.use(VeeValidate);

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