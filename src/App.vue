<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        NBA TEAM BUILDER
      </div>

      <v-spacer></v-spacer>
  
        <v-btn height="100%" text to="/">Home</v-btn>
        <v-btn height="100%" text to="/playerstats">Player Stats</v-btn>
        <v-btn height="100%" text to="signup">Sign Up</v-btn>

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
