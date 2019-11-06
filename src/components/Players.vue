<template>
  <div>
    <v-card max-width="400" class="mt-10 ml-10">
      <v-card-title>Type the name of the player</v-card-title>
        <v-text-field v-model="inputF" label="first">{{ inputF }}</v-text-field>
        <v-text-field v-model="inputL" label="last">{{ inputL }}</v-text-field>
        <v-btn @click="getData">Get data</v-btn>
       
          <h1>{{ firstName }} {{lastName}} </h1>
          <h3>{{ team }}</h3>
    
    </v-card>


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


  },

}
  

</script>

<style scoped>

</style>