<template>
  <div class="card mb-3 w-100">
    <div class="card-header">
      Заказ от 21 апреля<br />
      5098690-0031
    </div>
    <div class="row g-0">
      <div class="col-md-4 text-center p-2">
        <img src="~/assets/dress_in_block.png" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Женское платье</h5>
          <p class="card-text">
            <b>Звезда взошла</b> 48, M
          </p>
          <p class="card-text">
            Тип доставки: <b>курьер</b>
          </p>
          <p class="card-text">
           Доставка ожидается 1 мая в 17:00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
}
</script>
<style scoped>
.card-header{
    background-color: #fff !important;
}
img{
    max-height: 30vh;
    object-fit: cover;
    object-position: center;
}
</style>
