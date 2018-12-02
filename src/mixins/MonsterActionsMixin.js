export const MonstersActionMixin = {
  methods: {
    feed: function (monster) {
      alert('Feeding: ' + monster.name)
    },
    sendOnQuest: function (monster) {
      alert('Sending: ' + monster.name)
    }
  }
}
