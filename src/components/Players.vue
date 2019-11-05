<template>
  <div>
    <v-card max-width="400" class="mt-10 ml-10">
      <v-img height="300" src='https://nba-players.herokuapp.com/players/james/lebron'>

      </v-img>
        <v-card-title> {{ playerName }}</v-card-title>
        <v-card-text> {{ playerTeam }} </v-card-text>
        <v-card-text> {{ playerRating }} </v-card-text>
        <v-btn @click="getData">Get data</v-btn>
        <ul>
          <li>
            {{ player }}
          </li>
        </ul>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      playerName: "Lebron James",
      playerTeam: "Los Angeles Lakers",
      playerRating: 96,
      player: null,
    }
  },
  methods: {
    getData() {
    axios.get('https://www.balldontlie.io/api/v1/players?search=lebron')
    .then(response => (this.player = response))
    }

  },

}
  

</script>

<style scoped>

</style>