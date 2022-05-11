<template>
  <div v-if="product.id" class="col">
    <div class="card">
      <img v-if="product.photos" :src="url + product.photos[0]" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text text-danger">Бренд Тутушка</p>
        <div class="clearfix">
          <div class="float-end">
            <p class="card-text">{{ product.cost }} РУБ</p>
          </div>

          <NuxtLink
            v-if="this.$route.params.category"
            :to="`${this.$route.params.category}/${product.id}?gender=${product.gender}`"
            >Подробнее</NuxtLink
          >
          <NuxtLink
            v-else
            :to="`${product.category}/${product.id}?gender=${product.gender}`"
            >Подробнее</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
  <div v-else>Ничего не найдено</div>
</template>
<script>
export default {
  name: 'ItemCard',
  props: ['product'],
  computed: {
    path() {
      return this.$route.path
    },
    url(){
       return this.$store.getters.URL_BASE
    }
  },
}
</script>
<style scoped>
img {
  width: 100%;
  object-fit: cover;
  pointer-events: none;
}
.card {
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #000;
}
</style>
