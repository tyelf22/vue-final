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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   
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
