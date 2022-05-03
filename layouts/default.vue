<template>
<div class="default">
<Header/>
     <Nuxt />
     <Footer/>
     </div>
</template>
<script>

export default {
  name: 'DefaultLayout',
    created() {
    this.$store.dispatch('getCategories')
    
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
body {
    overflow-x: hidden;
    font-family: 'Jost', sans-serif;
}
.default{
  box-sizing: border-box;
  position: relative;
  padding-bottom: calc(15rem + 200px);
  min-height: 100vh;
}
</style>