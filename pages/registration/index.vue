<template>
    <div class="registration">
        <HeaderBackground />
        <Registration />
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