<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-3">
          <div class="sticky-nav">
   <ol class="breadcrumb" v-if="products[0]">
      <li class="breadcrumb-item" v-if="products[0].category_name && this.$route.params.category" ><NuxtLink  :to="`/catalog/`">Каталог</NuxtLink></li>
      <li class="breadcrumb-item active" v-if="products[0].category_name && this.$route.params.category" aria-current="page">{{products[0].category_name}}</li>
    </ol>
          </div>
       
      </div>
      <div class="col-sm-9">
          <h2>Все модели</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-3" v-if="products[0]">
              <ItemCard  v-for="product in products" :key="product.id" :product="product" :catalog="true"/>
          </div>
          <div v-else>Ничего не найдено</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryCatalog',
  created() {
    if(!this.$route.query.search)
    this.$store.dispatch('getProductsByCategory', {category: this.$route.params.category, gender: this.$route.query.gender})
    else this.$store.dispatch('searchProduct', this.$route.query.search);
  },
  computed: {
    products() {
      return this.$store.getters.PRODUCTS
    }
  },
}
</script>
<style scoped>
.sticky-nav{
    position: sticky;
    top: 15vh;
}
</style>
