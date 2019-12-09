import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        playerNames: [], //CREATE EMPTY ARRAY TO STORE PLAYER OBJECTS
    }
})