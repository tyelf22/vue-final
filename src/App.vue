<template>
  <v-app>
    <v-app-bar
      app
      color="primary"    
    >
      <div class="d-flex align-center white--text">
        NBA STAT TRACKER
      </div>

      <v-spacer></v-spacer>
  
        <v-btn class="white--text" height="100%" text to="/">Home</v-btn>
        <v-btn class="white--text"  height="100%" text to="/players">Players</v-btn>
        <v-btn class="white--text"  height="100%" text to="/playerstats">Player Stats</v-btn> 

            <v-badge id="badge"
      color="red"
      top
    >
      <template v-slot:badge>
        <span v-if="counter > 0"> {{counter}} </span> 
      </template>
        <v-icon dark></v-icon>
      </v-badge>
  </v-app-bar>

    <v-content>
     <keep-alive> 
      <router-view></router-view>
     </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',

  data: () => ({
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
      lebronFreeThrowPercentage: null,
  }),

  mounted() {
            
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
        this.lebronFreeThrowPercentage = response.data.data[0].ft_pct

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
              'freeThrowPercentage': this.lebronFreeThrowPercentage,
            });

          })


    console.log('created'); // eslint-disable-line no-console

  },

  computed: {
    counter() {
        return this.$store.state.playerNames.length;
    },
}
};
</script>

<style>
* {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1px;
}


.link {
  text-decoration: none;
}

#badge {
  margin-left: -5px;
  margin-right: 10px;
  margin-bottom: 8px;
}

</style>
