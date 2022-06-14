<template>
  <div class="container text-center">
    <div class="card p-3 m-5">
      <div class="card-body text-center">
        <h5 class="card-title"><b>Создание магазина</b></h5>
        <div class="my-5">
          <input
            type="text"
            class="form-control"
            id="shop_title"
            placeholder="Название магазина"
            v-model="title"
          />
        </div>
        <button class="button_create px-md-5 py-md-2 p-2" @click="createShop"
          >Создать магазин</button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateShop',
  data(){
    return{
      title: ''
    }
  },
  methods:{
    createShop(){
      this.$store.dispatch('createShop', {"shop_name": this.title, "doc_number": 2325})
    }
  }
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
