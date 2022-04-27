<template>
<div class="col">
    <div class="card">
        <img src="~/assets/item_card.png" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Платье "Яркая мадама"</h5>
        <p class="card-text text-danger">Бренд Тутушка</p>
        <div class="clearfix">
            <div class="float-end">
 <p class="card-text">4566 РУБ</p>
            </div>

        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemCard',
}
</script>
<style scoped>
img{
    width: 100%;
    object-fit: cover;
    pointer-events: none;
}
.card{
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #000;
}
</style>
