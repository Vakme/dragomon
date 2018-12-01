<template><div id="navbar">
        <md-toolbar class="md-transparent" md-elevation="0">
            <div class="nav-bg"></div>
            <div class="upper">
                <div class="md-toolbar-section-start">
                    <md-button class="md-icon-button" @click="showNavigation = true">
                        <md-icon>menu</md-icon>
                    </md-button>
                <h3 class="md-title">Dragomon</h3>
                </div>
            </div>
        </md-toolbar>
        <md-drawer :md-active.sync="showNavigation">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">Menu</span>
            </md-toolbar>

            <md-list>
                <md-list-item v-for="item in menu_items" :to="'/'+item.link" :key="item.link">
                    <span class="md-list-item-text">{{item.text}}</span>
                </md-list-item>
            </md-list>

            <md-divider></md-divider>

            <md-subheader>
                {{getUsername}}
            </md-subheader>

            <md-list>
                <md-list-item to="/profile">
                    <span class="md-list-item-text">Profile</span>
                </md-list-item>
                <md-list-item href="#" @click="signOut">
                    <span class="md-list-item-text">Signout</span>
                </md-list-item>
            </md-list>
        </md-drawer>
    </div>
</template>

<script>
import db from '../db'
import 'firebase/auth'

export default {
  name: 'Navbar',
  props: { },
  data: function () {
    return {
      showNavigation: false,
      errors: String,
      menu_items: [
        {
          text: 'Home',
          link: ''
        },
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
    flex: 1;
}

    .nav-bg {
        position: absolute;
        width: 100%;
        height: 120px;
        transform: skewY(-2deg);
        background-color: #932307;
        left: 0;
        bottom: 10px;
        -webkit-box-shadow: 0 0 32px 3px rgba(25,26,32,1);
        -moz-box-shadow: 0 0 32px 3px rgba(25,26,32,1);
        box-shadow: 0 0 32px 3px rgba(25,26,32,1);
    }
    .upper {
        z-index: 1;
    }
    #navbar {
        margin-bottom: 50px;

    }
</style>
