<template>
    <div>
        <div>
            <v-parallax
                dark
                height="300"
                src="../assets/basketball1.png"
            >
                <v-row
                align="center"
                justify="center"
                >
                <v-col class="text-center" cols="12">
                    <h1 class="display-2 mb-4" >NBA Stat Tracker</h1>
                    <h4 class="subheading font-weight-thin ">Track your favorite players stats!</h4>
                </v-col>
                </v-row>
            </v-parallax>
        </div>
        <div>
            <h2 class="title text-center mt-10 ">The best way to track and compare stats</h2>
            <h4 class="subtitle-1 text-center font-weight-thin">Start today by following three easy steps</h4>

            <v-row justify="center" class="mt-12 px-5">
                <v-col class="text-center" cols="12" sm="3">
                    <v-icon large color="primary">mdi-numeric-1-circle</v-icon>
                    <h5 class="mt-4">Search Player</h5>
                    <p class="mt-4 text-left">Start by searching the first and last name of the player you want to add.(i.e. Lebron James)</p>
                </v-col>
                <v-col class="text-center" cols="12" sm="3">
                    <v-icon large color="primary">mdi-numeric-2-circle</v-icon>
                    <h5 class="mt-4">Add Player</h5>
                    <p class="mt-4 text-left">Once the searched player is inside the queue box, add the player to your roster.</p>
                </v-col>
                <v-col class="text-center" cols="12" sm="3">
                    <v-icon large color="primary">mdi-numeric-3-circle</v-icon>
                    <h5 class="mt-4">View Stats</h5>
                    <p class="mt-4 text-left">Each added player will have their stats displayed on the player stats page.</p>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
/* 
import axios from 'axios'

export default {
    data() {
        return {
      lebronFirst: "",
      lebronLast: "",
      lebronFeet: null,
      lebronInches: null,
      lebronWeight: null,
      lebronTeam: "",
      lebronId: null,
      lebronPoints: null,
      lebronGames: null,
      lebronAssists: null,
      lebronRebounds: null,
      lebronSteals: null,
      lebronTurnovers: null,
      lebronFieldGoals: null,
      }
    },
  created() {
            
        axios.get("https://www.balldontlie.io/api/v1/players?search=lebron james")
       .then(response => {
        this.lebronFirst = response.data.data[0].first_name
        this.lebronLast = response.data.data[0].last_name
        this.lebronFeet = response.data.data[0].height_feet
        this.lebronInches = response.data.data[0].height_inches
        this.lebronWeight = response.data.data[0].weight_pounds
        this.lebronTeam = response.data.data[0].team.full_name
        this.lebronId = response.data.data[0].id
        })

       .catch(error => {
         console.log(error) // eslint-disable-line no-console
       })

        axios.get("https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=237")
       .then(response => {
        this.lebronPoints = response.data.data[0].pts
        this.lebronGames = response.data.data[0].games_played
        this.lebronAssists = response.data.data[0].ast
        this.lebronRebounds= response.data.data[0].reb
        this.lebronSteals = response.data.data[0].stl
        this.lebronTurnovers = response.data.data[0].turnover
        this.lebronFieldGoals = response.data.data[0].fg_pct

            this.$store.state.playerNames.push({
              'id': this.lebronId,
              'name': `${this.lebronFirst} ${this.lebronLast}`,
              'weight': this.lebronWeight,
              'height': `${this.lebronFeet}' ${this.lebronInches}"`,
              'image': `https://nba-players.herokuapp.com/players/james/lebron`,
              'gamesPlayed' : this.lebronGames,
              'points': this.lebronPoints,
              'assists': this.lebronAssists,
              'rebounds': this.lebronRebounds,
              'steals': this.lebronSteals,
              'turnovers': this.lebronTurnovers,
              'fieldGoalPercentage': this.lebronTurnovers,
            });

          })


    console.log('created'); // eslint-disable-line no-console

  },

} */
</script>

<style scoped>
.box {
    height: 900px;
}
</style>