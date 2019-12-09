<template>
  <v-app>
    <v-app-bar
      app
      hide-on-scroll
      
      color="primary"    
    >
      <div class="align-center white--text d-none d-sm-flex">
        NBA STAT TRACKER
      </div>

      <v-spacer></v-spacer>
  
        <v-btn class="white--text" height="110%" text to="/">Home</v-btn>
        <v-btn class="white--text"  height="110%" text to="/players">Players</v-btn>
        <v-btn class="white--text"  height="110%" text to="/playerstats">Player Stats</v-btn> 

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
      <transition name="fade" mode="out-in">
        <keep-alive> 
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',

  data: () => ({
      lebronTeam: "",
      lebronId: undefined,
      lebronPoints: undefined,
      lebronGames: undefined,
      lebronAssists: undefined,
      lebronRebounds: undefined,
      lebronSteals: undefined,
      lebronTurnovers: undefined,
      lebronFieldGoals: undefined,
      lebronFreeThrowPercentage: undefined,
  }),

  created() {
        axios.get("https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=237") //Add example player on created
       .then(response => {
        this.lebronPoints = response.data.data[0].pts
        this.lebronGames = response.data.data[0].games_played
        this.lebronAssists = response.data.data[0].ast
        this.lebronRebounds= response.data.data[0].reb
        this.lebronSteals = response.data.data[0].stl
        this.lebronTurnovers = response.data.data[0].turnover
        this.lebronFieldGoals = response.data.data[0].fg_pct
        this.lebronFreeThrowPercentage = response.data.data[0].ft_pct
            
            //push each item to players array and create new object
            this.$store.state.playerNames.push({ 
              'id': 237,
              'name': "Lebron James",
              'weight': 250,
              'height': "6' 8\"",
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

  console.log(this.$store.state.playerNames, "created")// eslint-disable-line no-console

  },

  computed: {
    counter() {
        return this.$store.state.playerNames.length; //display current length of objects in array for user
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

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}

</style>
