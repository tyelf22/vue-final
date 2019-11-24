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

</style>
