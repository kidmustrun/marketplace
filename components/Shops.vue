<template>
<div class="container text-center">
    <p>У вас пока еще нет ни одного магазина, но вы можете создать его</p>
    <NuxtLink to="/account/createshop" class="button_create button_create px-md-5 py-md-2 p-2">+ Создать магазин</NuxtLink>
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
transition: 0.3s ease;
text-decoration: none;
}
.button_create:hover{
    background: #144169;
    transition: 0.3s ease;
}
</style>
