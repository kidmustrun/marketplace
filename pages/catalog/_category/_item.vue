<template>
<div>
<HeaderBackground/>
<ItemBlock/>
</div>
</template>

<script>
export default {
  name: 'category-id',
  created(){
    this.$store.dispatch('getProduct', this.$route.params.item)
  }
}
</script>
