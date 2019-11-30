<template>
  <div class="playerStats">
    <h1>2019-2020 Season Averages</h1>
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