import PlayerStats from './components/PlayerStats'
import Players from './components/Players'
import Home from './components/Home'

export const routes = [
    { path: '/', component: Home },
    { path: '/players', component: Players },
    { path: '/playerstats', component: PlayerStats  },
]