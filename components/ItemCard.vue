<template>
<div class="col">
    <div class="card">
        <img src="~/assets/item_card.png" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Название карточки</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
</style>
