<template>
  <div class="players">
        <h1>Search Player</h1> 
        <v-row>
          <v-col cols="12" xs="12" md="6">
            <v-form ref="form" v-model="valid">
              <v-text-field required :rules="nameRules" outlined v-model="inputF" label="First Name">{{ inputF }}</v-text-field>
              <v-text-field required :rules="nameRules" outlined v-model="inputL" label="Last Name">{{ inputL }}</v-text-field>
              <v-btn :disabled="!valid" @click="getData" class="mr-2 mt-n1" color="primary">
                  <v-icon class="mr-2">mdi-magnify</v-icon>
              Search Player</v-btn>
               <v-btn @click="reset" class="mr-2 mt-n1" color="error">
              Reset Form</v-btn>
              </v-form>
            </v-col>
              
            
            <v-col cols="12" xs="12" md="6">
              <v-sheet dark height="145" class="pa-12 text-center" color="success" elevation="3">
                <h3>{{firstName}} {{lastName}}</h3>
                <h4>{{team}}</h4>
              </v-sheet>
              <v-btn dark color="success" class="mt-6" @click="toArray">
                <v-icon class="mr-2">mdi-plus-circle-outline</v-icon>
              Add To Roster</v-btn>
            </v-col>
        </v-row>
  
        <app-player-card></app-player-card>

        <!-- Used custom directive -->
        <v-alert v-fade:display.delayed="'none'" id="playerAlert" v-model="playerAlert" v-if="playerAlert" type="success"> {{this.firstName}} {{this.lastName}} added!</v-alert>
        <v-alert v-fade:display.delayed="'none'" id="errorAlert" v-model="alert" v-if="alert" type="error">No player found</v-alert>
        <v-alert v-fade:display.delayed="'none'" id="errorAlert" v-model="seasonAlert" v-if="seasonAlert" type="error">Choose a current player</v-alert>
   
  </div>
</template>

<script>
import axios from 'axios'
import playerCard from './playerCard'


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
      heightFeet: undefined,
      heightInches: undefined,
      weight: undefined,
      id: undefined,
      points: undefined,
      gamesPlayed: undefined,
      assists: undefined,
      rebounds: undefined,
      steals: undefined,
      turnovers: undefined,
      fieldGoalPercentage: undefined,
      nameRules: [
        v => !!v || 'Full Name is required',
        v => (v || '').indexOf(' ') < 0 || 'No spaces are allowed'
      ],
      valid: false,
      freeThrowPercentage: undefined,
    }
  },

  components: {
    appPlayerCard: playerCard,
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

    },

    buttonClick() {
      this.getData();
      this.validate();
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
         this.freeThrowPercentage = response.data.data[0].ft_pct

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
            'freeThrowPercentage': this.freeThrowPercentage,
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

    reset () {
      this.$refs.form.reset();
    },

  },

}
  
</script>

<style scoped>
.players {
  margin: 25px 50px;
}

h1 {
  font-weight: 100;
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

@media screen and (min-width: 1080px) {

}

</style>