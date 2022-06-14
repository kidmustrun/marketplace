<template>
<div class="container">
   <h2><b>Мои заказы</b></h2>
    <OrderCard v-for="order in orders" :key="order.id" :order="order"/>
</div>
</template>

<script>
export default {
  name: 'Orders',
  computed:{
    orders(){
      return this.$store.getters.ORDERS
    },
    
  },
  created(){
    this.$store.dispatch('getOrders')
  }
}
</script>
<style scoped>

</style>
