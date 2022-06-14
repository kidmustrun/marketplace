<template>
  <div class="shop">
    <HeaderBackground />

    <div class="container mt-3">
      <h1>Добавить размеры на склад</h1>
      <div class="row">
        <div class="col">
          <div class="mb-3 row">
            <select v-model="size" class="form-select">
              <option selected disabled value="">Выберите размер</option>
              <option v-for="size in sizes" :key="size.id" :value="size.id">
                {{ size.size }}
              </option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="mb-3 row">
            <label for="count" class="col-sm-2 col-form-label"
              >Количество</label
            >
            <div class="col-sm-10">
              <input
                required
                type="number"
                class="form-control"
                id="count"
                v-model="count"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        class="button_create px-md-5 py-md-2 p-2 float-end"
        @click="addSizes"
      >
        + Добавить размеры
      </button>
    </div>
    <ItemBlock />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  data() {
    return {
      size: '',
      count: 0,
    }
  },
  computed: {
    product() {
      return this.$store.getters.PRODUCT
    },
    sizes() {
      return this.$store.getters.SIZES
    },
  },
  created() {
    this.$store.dispatch('getProduct', this.$route.params.id)
    this.$store.dispatch('getSizes')
  },
  methods: {
    addSizes() {
      this.$store.dispatch('addSizes', {
        id: this.$route.params.id,
        sizes: { size_id: this.size, count: this.count },
      })
    },
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
