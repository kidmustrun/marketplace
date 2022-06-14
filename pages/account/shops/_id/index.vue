<template>
  <div class="shop">
    <HeaderBackground />
    <div class="container mt-5">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><NuxtLink  :to="`/account/`">Личный кабинет</NuxtLink></li>
      <li class="breadcrumb-item active" aria-current="page">{{ shop.name }}</li>
    </ol>
      <div class="d-flex justify-content-between">
        
        <h1>Магазин <b>{{ shop.name }}</b></h1>
        <h2>
        <NuxtLink
      :to="`/account/shops/${this.$route.params.id}/add`"
      class="button_create px-md-5 py-md-2 p-2"
      >+ Добавить товар</NuxtLink
    ></h2>
      </div>
     <h2>Все модели</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-3" v-if="products[0]">
              <ItemCard :catalog="false"  v-for="product in products" :key="product.id" :product="product"/>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  computed: {
    shop() {
      return this.$store.getters.SHOP
    },
    products(){
      return this.$store.getters.PRODUCTS_IN_SHOP
    }
  },
  created() {
    this.$store.dispatch('getMyShop', this.$route.params.id)
    this.$store.dispatch('getProductsInShop', this.$route.params.id)
  },
}
</script>
<style scoped>
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
