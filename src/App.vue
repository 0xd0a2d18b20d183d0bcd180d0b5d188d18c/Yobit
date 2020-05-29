<template>
  <v-app>
    <v-navigation-drawer
     app
     temporary
     v-model="drawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Yobit
          </v-list-item-title>
          <v-list-item-subtitle>
            Alternative UI
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-app-bar-nav-icon 
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>Yobit</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="hidden-sm-and-down"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
      >
        <v-icon>{{link.icon}}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    links () {
      return [
        {title: 'Market', icon: 'add_shopping_cart', url: '/market'},
        {title: 'Pair', icon: 'flight_takeoff', url: '/pair/1'},
        {title: 'Wallets', icon: 'account_balance_wallet', url: '/wallets'}
      ]
    }
  }
};
</script>
