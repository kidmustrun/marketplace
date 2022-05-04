<template>
  <tr>
    <td>
      <img src="~/assets/dress_in_block.png" class="img-fluid rounded-start" />
    </td>
    <td>
      Женское платье<br /><b>Звезда взошла</b><br /><br />Размер 48, M<br />Артикул:
      09ОАМС5
    </td>
    <td>2050 РУБ</td>
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
  </tr>
</template>

<script>
export default {
  name: 'CartItem',
  data() {
    return {
      count: 1,
      cost: 2050,
      full_cost: 2050,
    }
  },
  methods: {
    reduceOne() {
      if (this.count >= 2) {
        this.count--
        this.full_cost = this.cost * this.count
         this.$store.commit('REDUCE_TOTAL_COST', this.cost)
      }
    },
    addOne() {
      this.count++
      this.full_cost = this.cost * this.count
       this.$store.commit('ADD_TOTAL_COST', this.cost)
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
