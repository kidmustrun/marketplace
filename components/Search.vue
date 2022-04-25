<template>
  <form class="search">
      <input type="text" name="search" placeholder="я ищу"/>
      <button type="submit" />
  </form>
</template>

<script>
export default {
  name: 'Search',
}
</script>
<style scoped>
.search {
    box-sizing: border-box;
  width: 90%; 
  margin: 40px auto;
  border: 1px solid #000;
  min-height: 40px;
}
input[type='text'] {
  border: none; 
  outline: none; 
  -webkit-appearance: none;
  vertical-align: middle;
  width: calc(100% - 110px);
  height: 40px;
  margin-left: 30px;
}
button[type='submit'] {
  width: 40px;
  height: 40px;
  border: none;
   vertical-align: middle;
  background: url("~@/assets/search.svg") no-repeat 50% 50%;
}
</style>
