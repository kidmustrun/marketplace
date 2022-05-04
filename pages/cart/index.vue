<template>
  <div class="cart">
    <HeaderBackground />
    <div class="container mt-5">
      <h1>Корзина</h1>
      <div class="table-responsive">
        <table class="table align-middle text-center">
          <thead>
            <tr>
              <th class="col">Фотография</th>
              <th class="col">Товар</th>
              <th class="col">Цена</th>
              <th class="col">Количество</th>
              <th class="col">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </table>
      </div>
      <h3 class="float-end">Итого: {{total_cost}} РУБ</h3>
      <br>
      <br>
      <button class="button_create px-md-5 py-md-2 p-2 float-end">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
    computed: {
    total_cost() {
      return this.$store.getters.TOTAL_COST
    }
  },
}
</script>
<style scoped>
.button_create{
    background: #0D2C48;
border-radius: 10px;
color: #fff;
border: none;
transition: 0.3s ease;
text-decoration: none;
}
.button_create:hover{
    background: #144169;
    transition: 0.3s ease;
}
</style>
