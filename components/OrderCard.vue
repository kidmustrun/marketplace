<template>
  <div class="card mb-3 w-100">
    <div class="card-header">
      Заказ от {{new Date(order.created_at).toLocaleString()}}<br />
                    <p class="card-text  ">
            Тип оплаты: <b>{{order.pay.payment}}</b>
          </p>
    </div>
    <div class="row g-0" v-for="product in order.products" :key="product.id">
      <div class="col-md-4 text-center p-2">
        <img :src="url + product.product.photos[0]" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{product.product.title}}</h5>
          <p class="card-text">
            Размер: <b>{{product.size.size}}</b> 
          </p>

          <p class="card-text">
           Стоимость: {{product.product.cost}} * {{product.count}} шт.
          </p>
        </div>
      </div>
    </div>
    <div class="card-footer text-end">

           <h3 class="card-text">
            Общая стоимость: <b>{{order.final_cost}}</b>
          </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
  props: [
    'order'
 ],
 computed:{
      url(){
       return this.$store.getters.URL_BASE
  },
 }
}
</script>
<style scoped>
.card-header{
    background-color: #fff !important;
}
img {
  height: 30vh;
  object-fit: cover;
  object-position: center;
}
</style>
