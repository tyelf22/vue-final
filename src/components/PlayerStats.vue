<template>
  <div class="playerStats">
    <h1>See the player stats</h1>
    <v-card class="mt-5" v-for="player in this.$store.state.playerNames" :key="player.id"> 
      <v-row justify="space-between">
      <v-card-title>{{ player.name }}</v-card-title>
      <v-card-text> 
        Games Played: {{ player.gamesPlayed}} |
        Points: {{ player.points }} | 
        Assists: {{player.assists}} |
        Rebounds: {{player.rebounds}} |
        Steals: {{player.steals}} |
        Turnovers: {{player.turnovers}} |
        FG%: {{ player.fieldGoalPercentage }} |
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
h1 {
  font-weight: 100;
}
</style>