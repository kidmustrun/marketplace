<template>
    <div class="authorization">
        <HeaderBackground />
        <Auth />   
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'IndexPage',
beforeMount(){
    if(Cookies.get('token')){
       this.$router.push('/account')
    }
  }
}
</script>