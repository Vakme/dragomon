<template>
  <div id="app">
    <navbar v-if="isLoggedIn"></navbar>
    <router-view/>
    <feedback></feedback>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Feedback from './components/Feedback'
  export default {
    name: 'app',
    components: {
      'navbar': Navbar,
      'feedback': Feedback
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
  background: #2D2E34;
}
</style>
