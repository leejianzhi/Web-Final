import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'

import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import store from './store'

import axios from './http'

Vue.use(ElementUI)
Vue.use(VueParticles)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
