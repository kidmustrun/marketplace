<template>
  <tr>
    <td>
      <img
        v-if="product.product.photos"
        :src="url + product.product.photos[0]"
        class="img-fluid rounded-start"
      />
    </td>
    <td>
      <b>{{ product.product.title }}</b
      ><br />Размер {{product.size}}<br />Артикул: 09ОАМС5
    </td>
    <td>{{ product.product.cost }}</td>
    <td>
      <div class="input-group w-50 mx-auto">
        <input
          type="button"
          value="-"
          id="button_minus"
          class="counting p-3"
          @click="reduceOne()"
        />
        <input
          type="number"
          id="num_count"
          name="quantity"
          v-model="count"
          class="text-center form-control"
        />

        <input
          type="button"
          value="+"
          id="button_plus"
          class="counting p-3"
          @click="addOne()"
        />
      </div>
    </td>
    <td>{{ full_cost }} РУБ</td>
    <td>
      <button id="button_delete" class="counting p-3" @click="deleteProduct">
        <b>&#9587;&nbsp;&nbsp;Удалить</b>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['product'],
  data() {
    return {
      count: 1,
    }
  },
  computed: {
    full_cost() {
      return this.product.product.cost * this.count
    },
    url() {
      return this.$store.getters.URL_BASE
    },
  },
  methods: {
    reduceOne() {
      if (this.count >= 2) {
        this.count--
        this.full_cost = +this.product.product.cost * this.count
        this.$store.commit('REDUCE_TOTAL_COST', +this.product.product.cost)
        this.$store.commit('CHANGE_COUNT_IN_CART', {id: this.product.product.id, count: this.count})
      }
    },
    addOne() {
      this.count++
      this.full_cost = +this.product.product.cost * this.count
      this.$store.commit('ADD_TOTAL_COST', +this.product.product.cost)
      this.$store.commit('CHANGE_COUNT_IN_CART', {id: this.product.product.id, count: this.count})
    },
    deleteProduct() {
      this.$store.dispatch('deleteProduct', { product: this.product.product_id })
    },
  },
  mounted() {
    this.$store.commit('ADD_TOTAL_COST', this.full_cost)
  },
}
</script>
<style scoped>
img {
  height: 30vh;

  object-fit: cover;
  object-position: center;
}
.counting {
  border: none;
  background-color: transparent;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
