<template>
  <div v-if="shops[0]" class="container">
    <h2><b>Мои магазины</b></h2>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li v-for="shop in shops" :key="shop.id" class="list-group-item d-flex justify-content-between align-items-center">
          <b>{{ shop.name }}</b>
          <NuxtLink :to="`/account/shops/${shop.id}`" class="btn btn-outline-dark">Просмотр</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="container text-center">
    <p>У вас пока еще нет ни одного магазина, но вы можете создать его</p>
    <NuxtLink
      to="/account/createshop"
      class="button_create button_create px-md-5 py-md-2 p-2"
      >+ Создать магазин</NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: 'Shops',
  created(){
    this.$store.dispatch('getMyShops')
  },
  computed:{
    shops(){
        return this.$store.getters.SHOPS
    }
  }
}
</script>
<style scoped>
p {
  color: #555;
}
.button_create {
  background: #0d2c48;
  border-radius: 10px;
  color: #fff;
  border: none;
  transition: 0.3s ease;
  text-decoration: none;
}
.button_create:hover {
  background: #144169;
  transition: 0.3s ease;
}
</style>
