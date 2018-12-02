<template>
  <div id="app">
      <navbar v-if="isLoggedIn"></navbar>
      <md-content class="content">
        <router-view/>
      </md-content>
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
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons');

  html, body, #app {
    min-height: 100vh;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #2D2E34;
}
  .md-content.md-theme-default {
      background-color: transparent !important;
  }
  .content {
    padding: 0;
  }
</style>
