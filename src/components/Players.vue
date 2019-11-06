<template>
  <div class="players">
    <!-- <v-card max-width="400" class="mt-10 ml-10"> -->
        <h1>Type the name of the player</h1> 
        <v-text-field v-model="inputF" label="first">{{ inputF }}</v-text-field>
        <v-text-field v-model="inputL" label="last">{{ inputL }}</v-text-field>
        <v-btn @click="getData">Get data</v-btn>
       
          <h1>{{ firstName }} {{lastName}} </h1>
          <h3>{{ team }}</h3>

          <v-btn @click="toArray">Save Team</v-btn>

          <ul>
            <li v-for="playerFirst in playerFirstNames" :key="playerFirst.id"> {{ playerFirst }}</li>
          </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      inputF: '',
      inputL: '',
      team: '',
      playerFirstNames: [],
      playerLastNames: [],
      playerTeams: []
    }
  },
  methods: {
    getData() {
    
        axios.get("https://www.balldontlie.io/api/v1/players?search=" + this.inputF + " " + this.inputL)
       .then(response => this.firstName = response.data.data[0].first_name)

       axios.get("https://www.balldontlie.io/api/v1/players?search=" + this.inputF + " " + this.inputL)
       .then(response => this.lastName = response.data.data[0].last_name) 

       axios.get("https://www.balldontlie.io/api/v1/players?search=" + this.inputF + " " + this.inputL)
       .then(response => this.team = response.data.data[0].team.full_name) 
   
    },

    toArray() {
      this.playerFirstNames.push(this.firstName)
      this.playerLastNames.push(this.lastName)
      console.log(this.playerFirstNames); // eslint-disable-line no-console
      console.log(this.playerLastNames); // eslint-disable-line no-console

    }


  },


}
  

</script>

<style scoped>
.players {
  margin: 50px 50px;
}

</style>