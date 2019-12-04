<template>
  <div class="playerStats">
    <h1>2019-2020 Season Averages</h1>
    <v-btn dark @click="vm.sort(ppgSort)">sort</v-btn>
    <v-card dark color="primary" class="mt-5 pa-2" v-for="player in this.$store.state.playerNames" :key="player.id"> 
      <v-row justify="space-between">
      <v-card-title>{{ player.name }}</v-card-title>
      <v-card-text> 
        Games Played: {{player.gamesPlayed}} |
        Points: {{player.points}} | 
        Assists: {{player.assists}} |
        Rebounds: {{player.rebounds}} |
        Steals: {{player.steals}} |
        Turnovers: {{player.turnovers}} |
        FG%: {{player.fieldGoalPercentage}} |
        FT%: {{player.freeThrowPercentage}}
        </v-card-text>
      </v-row>
    </v-card>
  </div>
</template>

<script>

export default {
    data() {
      return {
        vm: this.$store.state.playerNames,
      }
    },
    methods: {
      ppgSort: (a, b) => {
        let comparison = 0
        if(a.points > b.points) {
          comparison = -1
        } else if(a.points < b.points) {
          comparison = 1
        }
        return comparison
      }
    }
      
  }

</script>

<style scoped>
.playerStats {
  margin: 25px 50px;
}
h1 {
  font-weight: 100;
}
</style>