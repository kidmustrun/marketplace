<template>
  <div class="hero">
    
   <div class="zig-zag text-center">
  <h1><b v-if="this.$route.query.rus">{{this.$route.query.rus}}</b>
  <b v-else>Каталог</b></h1>
</div>
</div>
</template>
<script>
export default {
  name: 'HeroCategory',
}
</script>
<style scoped>
.hero {
  background-color: #0d2c48;
  height: 40vh;
  padding: 10vh 0vw 20vh 0vw;
  position: relative;
}
.slogan {
  font-size: max(1em, min(2em, calc(100vw * 4 / 75)));
  color: #fff;
}
.triangle_brown {
  color: #b56a0e;
}
.triangle_yellow {
  color: #dccb33;
}
.triangle_red {
  color: #b20d14;
}
.zig-zag {
  background: #fff;
  position: relative;
  top: 10vh;
}

.zig-zag:after {
  background: linear-gradient(-45deg, transparent 20px, #fff 0),
              linear-gradient( 45deg, transparent 20px, #fff 0);
  background-position: left bottom;
  background-size: 20px 20px;
  content: "";
  display: block;
  height: 20px;
  width: 100%;
  position: absolute;
}
img{
  object-fit: cover;
  height: calc(40vh - 74px);
  width: 100%;
  object-position: top;
}
</style>
