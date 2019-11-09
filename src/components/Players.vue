<template>
  <div class="players">
        <v-alert dismissible v-model="alert" v-if="alert" type="error">No player found</v-alert>
        <h1>Type the name of the player</h1> 
          
        <v-row>
          <v-col cols="12" xs="12" sm="6">
            <v-text-field v-model="inputF" label="first">{{ inputF }}</v-text-field>
            <v-text-field v-model="inputL" label="last">{{ inputL }}</v-text-field>
              <v-row >  
                <v-btn class="mr-2" color="primary" @click="getData">Search Player</v-btn>
                <v-btn @click="toArray">Save To Roster</v-btn>
               </v-row>
              <h1> {{ firstName }} {{lastName}} </h1>
              <h3>{{ team }}</h3>
          </v-col>
        
  
            <v-col cols="12" xs="12" sm="6">
              <v-card class="mt-5" v-for="(player, index) in playerNames" :key="player.id"> 
                <v-row justify="space-between">
                <v-card-title>{{ player }}</v-card-title>
                <v-btn fab small class="mt-3 mr-5" color="error" @click="deleteItem(index)">
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
                </v-row>
              </v-card>
            </v-col>
          </v-row>



        <!-- <v-text-field v-model="inputF" label="first">{{ inputF }}</v-text-field>
        <v-text-field v-model="inputL" label="last">{{ inputL }}</v-text-field>
        <v-btn color="primary" @click="getData">Search Player</v-btn> -->
       


          
        
       
          <!-- <v-row>
            <v-col cols="12" sm="6">
              <v-card class="mt-5" v-for="(player, index) in playerNames" :key="player.id"> 
                <v-row justify="space-between">
                <v-card-title>{{ player }}</v-card-title>
                <v-btn fab small class="mt-3 mr-5" color="error" @click="deleteItem(index)">
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
                </v-row>
              </v-card>
            </v-col>
          </v-row> -->

    
         
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
      //playerFirstNames: [],
      //playerLastNames: [],
      playerNames: [],
      alert: false,
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
       .catch(error => {
         console.log(error) // eslint-disable-line no-console
         this.alert = true;
         
       })

        this.clear();
    },

    toArray() {
      // this.playerFirstNames.push(this.firstName)
      // this.playerLastNames.push(this.lastName)
      // console.log(this.playerFirstNames); // eslint-disable-line no-console
      // console.log(this.playerLastNames); // eslint-disable-line no-console
          this.playerNames.push(this.firstName + " " + this.lastName)
          console.log(this.playerNames) // eslint-disable-line no-console
    },

    deleteItem(index) {
      this.playerNames.splice(index, 1)
    },

    clear() {
      this.inputF = "";
      this.inputL = "";
    }


  },


}
  

</script>

<style scoped>
.players {
  margin: 50px 50px;
}

</style>