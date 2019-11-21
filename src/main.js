import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'
import { store } from './store/store';

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
});

export const eventBus = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  render: h => h(App)
})
