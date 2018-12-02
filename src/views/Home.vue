<template>
  <div class="home">
    This is homepage
      {{userData}}

      <md-dialog :md-active.sync="firstLogin">
              <md-dialog-title>Suprise!</md-dialog-title>
              <p>Congratulations, you receive an egg!
              And something just Hatched!</p>

        <md-dialog-actions>
          <md-button class="md-primary" @click="addFirstMonster">Close</md-button>
        </md-dialog-actions>
      </md-dialog>
  </div>
</template>

<script>
  import {UserDataMixin} from '../mixins/UserDataMixin'
  import {Monster} from '../models/Monster'

export default {
  name: 'home',
  data() {
    return {
      firstLogin: false
    }
  },
  mixins: [UserDataMixin],
  watch: {
    userData: function (user) {
      if(user.monsterCount === 0) {
        this.firstLogin = true;
      }
    }
  },
  methods: {
    addFirstMonster: function () {
      console.log(Monster.baseMonster().getMonster())
      this.$firebaseRefs.userData.child('monsterCount').set(1);
      this.$firebaseRefs.userData.child('monsters').push(Monster.baseMonster().getMonster());
      this.firstLogin = false;
    }
  }
}
</script>
