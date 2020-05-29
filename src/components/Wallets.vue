<template>
  <v-app>
    <v-card-title>
      Wallets
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="wallets"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    >
    </v-data-table>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
          {
            text: 'Currency',
            align: 'start',
            sortable: true,
            value: 'currency',
          },
          {
            text: 'Balance',
            align: 'start',
            sortable: true,
            value: 'balance',
          }
      ],
      wallets: [
        {
          currency: 'BTC',
          balance: '1'
        }
      ]
    }
  }
};
</script>
