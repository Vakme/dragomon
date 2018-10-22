<template>
  <div id="app">
    <navbar v-if="isLoggedIn"></navbar>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    name: 'app',
    components: {
      'navbar': Navbar,
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.getLoginState;
      }
    }
  }
</script>
<style lang="scss">
  html, body, #app {
    min-height: 100vh;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #d558c8 linear-gradient(-20deg, #d558c8 0%, #24d292 100%);
}
</style>
