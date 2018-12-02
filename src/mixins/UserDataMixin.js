import db from '../db'

export const UserDataMixin = {
  data() {
    return {
      userData: {}
    }
  },
  computed: {
    getUserUid () {
      return this.$store.getters.getUser.uid
    }
  },
  firebase: function () {
    let uid = this.getUserUid
    return {
      userData: {
        source: db.ref('users/' + uid),
        asObject: true
      }
    }
  }
}
