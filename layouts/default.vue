<template>
<div class="default">
<div class="position-relative">
<Header/>
</div>
     <Nuxt />
     </div>
</template>
<script>

export default {
  name: 'DefaultLayout'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
.default{
    overflow-x: hidden;
    font-family: 'Jost', sans-serif;
}
</style>