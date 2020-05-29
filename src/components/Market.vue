<template>
  <v-app>
    <h1>Market</h1>
    <v-data-table
      :headers="headers"
      :items="pairs"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      headers: [
          {
            text: 'Pair', 
            align: 'start',
            value: 'pair'
          },
          {
            text: 'Base Cur',
            align: 'start',
            sortable: true,
            value: 'baseCurrency',
          },
          {
            text: 'Quote Cur',
            sortable: true,
            value: 'quoteCurrency',
          },
          {
            text: '24hr %',
            sortable: true,
            value: 'hr24Pr'
          },
          {
            text: '24hr Vol',
            sortable: true,
            value: 'hr24Vol'
          },
          {
            text: '24hr Vol Cur',
            sortable: true,
            value: 'hr24VolCur'
          },
          {
            text: 'Last price',
            sortable: true,
            value: 'lastPrice'
          },
          {
            text: 'Last buy',
            sortable: true,
            value: 'lastPriceBuy'
          },
          {
            text: 'Last sell',
            sortable: true,
            value: 'lastPriceSell'
          },
          {
            text: '24hr High',
            sortable: true,
            value: 'hr24High'
          },
          {
            text: '24hr Low',
            sortable: true,
            value: 'hr24Low'
          },
          {
            text: '24hr Avg',
            sortable: true,
            value: 'hr24Avg'
          }

      ],
      pairs: [
        {
          pair: 'DASH/BTC',
          baseCurrency: 'DASH',
          quoteCurrency: 'BTC',
          hr24Pr: '-1.8%',
          hr24Vol: '1679.67363509',
          hr24VolCur: '210515.83201881',
          lastPrice: '0.00793231',
          lastPriceBuy: '0.00785880',
          lastPriceSell: '0.00793230',
          hr24High: '0.00807994',
          hr24Low: '0.00778949',
          hr24Avg: '0.00793471'
        }
      ]
    }
  }
};
</script>
