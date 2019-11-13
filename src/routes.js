import PlayerStats from './components/PlayerStats'
import Players from './components/Players'

export const routes = [
    { path: '', component: Players },
    { path: '/playerstats', component: PlayerStats  },
]