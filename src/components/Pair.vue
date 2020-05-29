<template>
  <v-app>
    <canvas ref="canvas" id="canvas"></canvas>
    <v-card-title>
      Bids
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="bids"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
    <v-card-title>
      Asks
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="asks"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </v-app>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
  data () {
    return {
      headers: [
        {
            text: 'Base Cur',
            align: 'start',
            sortable: true,
            value: 'baseCurrency',
        },
        {
            text: 'Quote Cur',
            align: 'start',
            sortable: true,
            value: 'quoteCurrency',
        },
        {
            text: 'Price',
            align: 'start',
            sortable: true,
            value: 'price',
        },
        {
            text: 'Amount',
            align: 'start',
            sortable: true,
            value: 'amount',
        }
      ],
      bids: [],
      asks: [],
      chartdata: {
        labels: [
          'Today',
          'Yesterday'
        ],
        datasets: [
          {
            label: 'Sells',
            backgroundColor: '#f87979',
            data: [1, 2],
            fill: false
          }
        ]
      }
    }
  },
  extends: Line,
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
};
</script>
