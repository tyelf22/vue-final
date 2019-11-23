import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'
import { store } from './store/store';

Vue.use(VueRouter)
Vue.directive('fade', {
  bind(el, binding) {
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'display') {
        el.style.display = binding.value
      } else {
        el.style.display = binding.value
      }
    }, delay)
  }
})

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
