<template>
  <div class="playerStats mt-12">
    <h1>2019-2020 Season Averages</h1>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row>
            <span class="mt-1">Sort</span>
            <v-icon class="ml-2">mdi-sort</v-icon>
          </v-row>
          
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <!-- SORT PLAYERS TO THE TOP BASED ON SEASON AVERAGE -->
          <v-btn color="success" class="mr-2" @click="vm.sort(statSort('points'))">PPG</v-btn>
          <v-btn color="success"  class="mr-2" @click="vm.sort(statSort('assists'))">APG</v-btn>
          <v-btn color="success"  @click="vm.sort(statSort('rebounds'))">RPG</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    
    <v-row>
      <v-col cols="12" sm="9">
        <v-card dark color="primary" class="mt-5 pa-2" v-for="player in this.$store.state.playerNames" :key="player.id"> 
          <v-row justify="space-between">
          <v-card-title>{{ player.name }}</v-card-title>
          <v-card-text> 
            <!-- DISPLAY EACH PLAYER STAT -->
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
      </v-col>

      <v-col cols="12" sm="3">
      <app-player-card></app-player-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import playerCard from './playerCard'

export default {
    data() {
      return {
        vm: this.$store.state.playerNames, //REFER TO THIS OBJECT
      }
    },
    methods: {
      statSort: (prop) => {
        return (a, b) => {
          return b[prop] - a[prop] //RETURN SORTED DATA BASED ON PASSED PROP
        }
      }
    },
    components: {
      appPlayerCard: playerCard, 
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