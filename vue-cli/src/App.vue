<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view :user="user"></router-view>
  </div>
</template>

<style scoped>
html,
body,
#app {
  background-color: #e8e8e8;
  font-family: "Pangolin", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%
}
</style>

<script>
import Navbar from '@/components/Navbar'
import jwt_decode from 'jwt-decode'
export default {
  name: 'app',
  created () {
    if (localStorage.postifyToken) {
      const decode = jwt_decode(localStorage.postifyToken)
      this.$store.dispatch('setIsAutnenticated', !this.isEmpty(decode))
      this.$store.dispatch('setUser', decode)

      this.$axios.post('/api/profiles/info', this.$store.getters.user)
        .then(res => {
          this.user = res.data
        })
    }
  },
  methods: {
    isEmpty (value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      )
    }
  },
  components: {
    'nav-bar': Navbar
  },
  data () {
    return {
      user: {}
    }
  }
}
</script>

