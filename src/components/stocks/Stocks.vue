<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    data() {
      return {
        stocks: [
          {id: 1, name: 'Mercedes', price: 200 },
          {id: 2, name: 'Sasol', price: 100 },
          {id: 1, name: 'Coca Cola', price: 300 },
          {id: 1, name: 'Simba', price: 50 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>