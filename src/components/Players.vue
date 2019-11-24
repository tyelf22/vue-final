<template>
  <div class="players">
        <h1>Search Player</h1> 
        <v-row>
          <v-col cols="12" xs="12" md="6">
            <v-form>
              <v-text-field outlined v-model="inputF" label="First Name">{{ inputF }}</v-text-field>
              <v-text-field outlined v-model="inputL" label="Last Name">{{ inputL }}</v-text-field>
              <v-btn class="mr-2 mt-n5" color="primary" @click="getData">
                  <v-icon class="mr-2">mdi-magnify</v-icon>
              Search Player</v-btn>
              </v-form>
            </v-col>
              
            
            <v-col cols="12" xs="12" md="6">
              <div class="box">
                <div>
                  <h3>{{firstName}} {{lastName}}</h3>
                  <div class="break"></div>
                  <h4>{{team}}</h4>
                </div>
              </div>
              <v-btn class="mt-3" color="success" @click="toArray">
                <v-icon class="mr-2">mdi-plus-circle-outline</v-icon>
              Add To Roster</v-btn>
            </v-col>
        </v-row>
  
            <v-row justify="center">
              <v-card dark class="mt-5 ma-1" v-for="(player, index) in this.$store.state.playerNames" :key="player.id"> 
                  <v-img 
                    class="align-end"
                    :src="player.image"
                  >
                    <v-card-title>{{player.name}}</v-card-title>
                  </v-img>
                <v-row justify="space-between">
            
                <v-card-text> 
                  Weight: {{ player.weight }} 
                  <br>
                  Height: {{ player.height }}
                  </v-card-text>
                  <v-btn fab small absolute bottom right class="mb-3 mr-n5" color="error" @click="deleteItem(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-row>
              </v-card>
          </v-row>  

          <!-- Used custom directive -->
          <v-alert v-fade:display.delayed="'none'" id="playerAlert" v-model="playerAlert" v-if="playerAlert" type="success"> {{this.firstName}} {{this.lastName}} added!</v-alert>
          <v-alert v-fade:display.delayed="'none'" id="errorAlert" v-model="alert" v-if="alert" type="error">No player found</v-alert>
          <v-alert v-fade:display.delayed="'none'" id="errorAlert" v-model="seasonAlert" v-if="seasonAlert" type="error">Choose a current player</v-alert>
   
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
      playerAlert: false,
      seasonAlert: false,
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
         this.resetAlert();
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
        .catch(error => {
         console.log(error) // eslint-disable-line no-console
         this.seasonAlert = true;
         this.playerAlert = false;
         this.resetSeasonAlert();
       })

        this.playerAlert = true;
        this.resetPlayerAlert();
    },

    resetPlayerAlert() {
      setTimeout(() => {
        this.playerAlert = false;
      }, 3000)
    },

    resetSeasonAlert() {
      setTimeout(() => {
        this.seasonAlert = false;
      }, 3000)
    },

      resetAlert() {
        setTimeout(() => {
        this.alert = false;
      }, 3000)
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

h1 {
  font-weight: 100;
  padding: 10px;
}

#playerAlert {
  width: 250px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -125px;
  font-size: 10px;
  z-index: 99;
  margin-top: 70px;
}

#errorAlert {
  width: 250px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -125px;
  font-size: 10px;
  z-index: 99;
  margin-top: 70px;
}

.box {
  height: 143px;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  border-radius: 4px;
}

.box div {
  
}

.box h3 {
  text-align: center;
}

.box h4 {
  
}

.box .break {
width: 100%;
}

@media screen and (min-width: 1080px) {

}

</style>