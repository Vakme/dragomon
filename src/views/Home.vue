<template>
  <div class="home">
    This is homepage
      {{userData}}
      <b-modal v-model="firstLogin">
          Congratulations, you receive an egg!
          And something just Hatched!
          <div slot="modal-footer" class="w-100">
              <b-btn @click="addMonster">Close Me</b-btn>
          </div>
      </b-modal>
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
        type: 'Goldpuker'
      });
      this.firstLogin = false;
    }
  }
}
</script>
