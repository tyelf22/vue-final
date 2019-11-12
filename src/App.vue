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
    </v-app-bar>

    <v-content>
      <app-players></app-players>
    </v-content>
  </v-app>
</template>

<script>
import Players from './components/Players';

export default {
  name: 'App',

  components: {
    appPlayers: Players,
  },

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

</style>
