<template>
  <div class="home">
    This is homepage
      {{userData}}

      <md-dialog-alert
              :md-active.sync="firstLogin"
              md-title="Suprise!"
              md-content="Congratulations, you receive an egg!
              And something just Hatched!"
      ></md-dialog-alert>
  </div>
</template>

<script>
  import db from '../db'

export default {
  name: 'home',
  data() {
    return {
      userData: {},
      firstLogin: false
    }
  },
  computed: {
    getUid() {
      return this.$store.getters.getUser.uid;
    }
  },
  firebase: function () {
    let uid = this.getUid;
    return {
      userData: {
        source: db.ref('users/' + uid),
        asObject: true
      }
    }
  },
  watch: {
    userData: function (user) {
      if(user.monsterCount === 0) {
        this.firstLogin = true;
      }
    }
  },
  methods: {
    addMonster: function () {
      this.$firebaseRefs.userData.child('monsterCount').set(1);
      this.$firebaseRefs.userData.child('monsters').push({
        name: 'Random',
        type: 'Goldpuker',
        health: 100,
        stamina: 100,
        exp: 0,
        lvl: 1,
        stats: {
          perception: 1,
          strength: 1,
          constitution: 1,
          dexterity: 1,
          intelligence: 1,
          luck: 1
        },
        specialSkill: 1
      });
      this.firstLogin = false;
    }
  }
}
</script>
