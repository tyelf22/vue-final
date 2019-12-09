# vue-final

## View on Netlify
[NBA Stat Tracker](https://nbastattracker.netlify.com/) 

## Final Requirements
1.Effectively use conditional logic and JavaScript array methods to render large lists. ([playerCard.vue](./src/components/playerCard.vue) line 29)
```javascript
v-if="playerAlert"

deleteItem(index) {
      this.$store.state.playerNames.splice(index, 1)
    }
```
2.Encapsulate your code as VueJS single-file components.
✔

3.Work with the Vue-CLI to create and manage your project within a real development toolset.
✔

4.Properly use Git for your source version control with an established record of at least 4 days of commits each week from October 15th through December 6th.
✔

5.Allow communication between components using props, custom events, or local store. ([playerCard.vue](./src/store/store.js) line 6)
```javascript
export const store = new Vuex.Store({
    state: {
        playerNames: []
    }
})
```

6.Present a form for user input that provides useful form validation and feedback.
```html
<v-form ref="form" v-model="valid">
    <v-text-field required :rules="nameRules" outlined v-model="inputF" label="First Name">{{ inputF }}</v-text-field> 
    <v-text-field required :rules="nameRules" outlined v-model="inputL" label="Last Name">{{ inputL }}</v-text-field>
    <v-btn :disabled="!valid" @click="getData" class="mr-2 mt-n1" color="primary">
        <v-icon class="mr-2">mdi-magnify</v-icon>
    Search Player</v-btn>
    <v-btn @click="reset" class="mr-2 mt-n1" color="error">
    Reset Form</v-btn>
</v-form>
```

7.Create a custom directive and use it on at least one of your components.
```html
<v-alert v-fade:display.delayed="'none'" id="playerAlert" v-model="playerAlert" v-if="playerAlert" type="success"> {{this.firstName}} {{this.lastName}} added!</v-alert>
```
```javascript
Vue.directive('fade', {
  bind(el, binding) {
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }
```

8.Use a mix of animations and transitions to enhance some aspects of your project.
```html
<transition name="fade" mode="out-in">
    <keep-alive> 
        <router-view></router-view>
    </keep-alive>
</transition>
```

9.Connect to a server using HTTP and display retrieved data (use vue-resource or Axios).
```javascript
axios.get("https://www.balldontlie.io/api/v1/players?search=" + this.inputF + " " + this.inputL) 
.then(response => {
    this.firstName = response.data.data[0].first_name
    this.lastName = response.data.data[0].last_name
})
```

10.Provide at least 3 different routes with navigation between them using vue-router.
```javascript
export const routes = [
    { path: '/', component: Home },
    { path: '/players', component: Players },
    { path: '/playerstats', component: PlayerStats  },
]
```

11.Manage your application's state using vuex.
```javascript
export const store = new Vuex.Store({
    state: {
        playerNames: [],
    }
})
```

12.Structure, document, and deploy your final project code according to common industry practices.
✔

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
