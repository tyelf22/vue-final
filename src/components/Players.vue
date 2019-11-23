<template>
  <div class="players">
        <v-alert dismissible v-model="alert" v-if="alert" type="error">No player found</v-alert>
        <h1>Type the name of the player</h1> 
          
        <v-row>
          <v-col cols="12" xs="12" sm="6">
            <v-text-field v-model="inputF" label="first">{{ inputF }}</v-text-field>
            <v-text-field v-model="inputL" label="last">{{ inputL }}</v-text-field>
              <v-row >  
                <v-btn class="mr-2 mt-3" color="primary" @click="getData">
                  <v-icon class="mr-2" dark>mdi-magnify</v-icon>
                  Search Player</v-btn>
                <v-btn class="mt-3" color="success" @click="toArray">
                  <v-icon class="mr-2" dark>mdi-plus-circle-outline</v-icon>
                  Add To Roster</v-btn>
               </v-row>
              <h1> {{ firstName }} {{lastName}} </h1>
              <h3>{{ team }}</h3>
          </v-col>
        
  
            <v-col cols="12" xs="12" sm="6">
              <v-card class="mt-5" v-for="(player, index) in this.$store.state.playerNames" :key="player.id"> 
                  <v-img
                    class="black--text align-end"
                    height="200px"
                    :src="player.image"
                  >
                    <v-card-title>{{player.name}}</v-card-title>
                  </v-img>
                <v-row justify="space-between">
                
                <v-btn fab small class="mt-3 mr-5" color="error" @click="deleteItem(index)">
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
                <v-card-text> 
                  Weight: {{ player.weight }} 
                  <br>
                  Height: {{ player.height }}
                  <br>
                  ID: {{player.id}}
                  </v-card-text>
                </v-row>
              </v-card>
            </v-col>
          </v-row>     
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
      alert: false,
      heightFeet: "",
      heightInches: "",
      weight: "",
      id: "",
      points: "",
      gamesPlayed: "",
      assists: "",
      rebounds: "",
      steals: "",
      turnovers: "",
      fieldGoalPercentage: "",

    }
  },
  methods: {
    getData() {
    
        axios.get("https://www.balldontlie.io/api/v1/players?search=" + this.inputF + " " + this.inputL)
       .then(response => {
         this.firstName = response.data.data[0].first_name
         this.lastName = response.data.data[0].last_name
         this.heightFeet = response.data.data[0].height_feet
         this.heightInches = response.data.data[0].height_inches
         this.weight = response.data.data[0].weight_pounds
         this.team = response.data.data[0].team.full_name
         this.id = response.data.data[0].id
        })

       .catch(error => {
         console.log(error) // eslint-disable-line no-console
         this.alert = true;
       })

        this.clear();
    },

    toArray() {

        axios.get("https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=" + this.id)
       .then(response => {
         this.points = response.data.data[0].pts
         this.gamesPlayed = response.data.data[0].games_played
         this.assists = response.data.data[0].ast
         this.rebounds = response.data.data[0].reb
         this.steals = response.data.data[0].stl
         this.turnovers = response.data.data[0].turnover
         this.fieldGoalPercentage = response.data.data[0].fg_pct
         console.log(response) // eslint-disable-line no-console

          this.$store.state.playerNames.push({
            'id': this.id,
            'name': this.firstName + " " + this.lastName,
            'weight': this.weight,
            'height': `${this.heightFeet}' ${this.heightInches}"`,
            'image': `https://nba-players.herokuapp.com/players/${this.lastName}/${this.firstName}`,
            'gamesPlayed' : this.gamesPlayed,
            'points': this.points,
            'assists': this.assists,
            'rebounds': this.rebounds,
            'steals': this.steals,
            'turnovers': this.turnovers,
            'fieldGoalPercentage': this.fieldGoalPercentage,
            });
        })
    },

    deleteItem(index) {
      this.$store.state.playerNames.splice(index, 1)
    },

    clear() {
      this.inputF = "";
      this.inputL = "";
    },  

  },

}
  
</script>

<style scoped>
.players {
  margin: 50px 50px;
}

</style>