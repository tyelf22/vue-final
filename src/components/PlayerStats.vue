<template>
<div class="playerStats">
  <h1>See the player stats</h1>
  <v-card class="mt-5" v-for="player in this.$store.state.playerNames" :key="player.id"> 
    <v-row justify="space-between">
    <v-card-title>{{ player.name }}</v-card-title>
    <v-card-text> 
      Weight: {{ player.weight }} 
      <br>
      Height: {{ player.height }}
      </v-card-text>
    </v-row>
  </v-card>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>