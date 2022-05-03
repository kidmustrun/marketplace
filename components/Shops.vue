<template>
<div class="container text-center">
    <p>У вас пока еще нет ни одного магазина, но вы можете создать его</p>
    <button class="button_create">+ Создать магазин</button>
</div>
</template>

<script>
export default {
  name: 'Shops',
}
</script>
<style scoped>
p{
    color: #555;
}
.button_create{
    background: #0D2C48;
border-radius: 10px;
color: #fff;
border: none;
padding: 10px 60px;
transition: 0.3s ease
}
.button_create:hover{
    background: #144169;
    transition: 0.3s ease;
}
</style>
