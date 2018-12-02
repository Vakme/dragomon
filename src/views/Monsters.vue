<template>
    <div class="md-layout md-gutter md-alignment-top-space-around">
        <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100"
             v-for="(monster, key) in userData.monsters"
             :key="key"
        >
            <md-card md-with-hover @click.native="doStuff(monster)">
                <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="4:3">
                        <img src="https://placekitten.com/300/300" :alt="monster.type">
                    </md-card-media>

                    <md-card-area>
                        <md-card-header>
                            <span class="md-title">{{monster.name}}</span>
                            <span class="md-subhead">{{monster.type}}</span>
                        </md-card-header>

                        <md-card-actions>
                            <md-button @click.stop="feed(monster)">Feed</md-button>
                            <md-button @click.stop="sendOnQuest(monster)">Send on Quest</md-button>
                        </md-card-actions>
                    </md-card-area>
                </md-card-media-cover>
            </md-card>
        </div>

    </div>

</template>

<script>
  import {UserDataMixin} from '../mixins/UserDataMixin'
  import {MonstersActionMixin} from '../mixins/MonsterActionsMixin'

  export default {
    name: "monsters",
    mixins: [UserDataMixin, MonstersActionMixin],
    methods: {
      doStuff: function (monster) {
        window.alert(monster)
        console.log(monster)
      }
    }
  }
</script>

<style scoped>

</style>