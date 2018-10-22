<template>
      <b-navbar toggleable="md" type="dark" variant="dark" id="navbar">

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand to="/">Dragomon</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

              <b-navbar-nav>
                  <b-nav-item v-for="item in menu_items" :to="'/'+item.link" :key="item.link">{{item.text}}</b-nav-item>
              </b-navbar-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                  <b-nav-item-dropdown :text="getUsername" right>
                      <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                      <b-dropdown-item href="#" @click="signOut">Signout</b-dropdown-item>
                  </b-nav-item-dropdown>
              </b-navbar-nav>

          </b-collapse>
      </b-navbar>
</template>

<script>
import db from '../db'
import 'firebase/auth'

export default {
  name: 'Navbar',
  props: { },
  data: function () {
    return {
      errors: String,
      menu_items: [
        {
          text: 'Monsters',
          link: 'monsters'
        },
        {
          text: 'Trader',
          link: 'trader'
        },
        {
          text: 'Chat',
          link: 'chat'
        },
        {
          text: 'Ranking',
          link: 'ranking'
        }
      ]
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoginState;
    },
    getUsername() {
      return this.$store.getters.getUser.displayName;
    }
  },
  firebase: {
    monsters: db.ref('monsters')
  },
  methods: {
    signIn: function () {
     this.$store.dispatch('login')
       .then(() => this.$router.push('profile'))
       .catch(() => this.errors = 'Login error')
    },
    signOut: function () {
      this.$store.dispatch('logout')
        .then(() => this.$router.push('login'))
        .catch(() => this.errors = 'Logout error')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
