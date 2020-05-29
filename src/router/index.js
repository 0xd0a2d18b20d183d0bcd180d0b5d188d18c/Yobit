import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wallets from '@/components/Wallets'
import Pair from '@/components/Pair'
import Market from '@/components/Market'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/wallets',
            name: 'wallets',
            component: Wallets
        },
        {
            path: '/pair/:id',
            name: 'pair',
            component: Pair
        },
        {
            path: '/market',
            name: 'market',
            component: Market
        },
    ],
    mode: 'history'
})