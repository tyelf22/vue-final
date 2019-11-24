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



export default {
  name: 'App',

  data: () => ({
    //
  }),

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
