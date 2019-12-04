<template>
  <div class="playerStats">
    <h1>2019-2020 Season Averages</h1>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Sort By...</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mr-2" dark @click="vm.sort(statSort('points'))">PPG</v-btn>
          <v-btn class="mr-2" dark @click="vm.sort(statSort('assists'))">APG</v-btn>
          <v-btn dark @click="vm.sort(statSort('rebounds'))">RPG</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    
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
      statSort: (prop) => {
        return (a, b) => {
          return b[prop] - a[prop]
        }
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