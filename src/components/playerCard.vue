<template>
            <v-row justify="center">
              <!-- CREATE CARD FOR EACH PLAYER IN OBJECT -->
              <v-card color="primary" class="mt-5 ma-1" v-for="(player, index) in this.$store.state.playerNames" :key="player.id"> 
                  <v-img 
                    class="align-end"
                    :src="player.image"
                  >
                    <v-card-title class="white--text">{{player.name}}</v-card-title>
                  </v-img>
                <v-row justify="space-between">
            
                <v-card-text class="white--text"> 
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
</template>

<script>
export default {
    methods: {
        deleteItem(index) {
      this.$store.state.playerNames.splice(index, 1) //delete object item in array
    },
  }
}
</script>



<style scoped>

</style>