<template>
<div class="hero d-flex progressive replace">
  <div class="accent_border">
<span class="slogan">Высокачественная народная одежда от<br>российских производителей</span>
</div>
</div>
</template>

<script>
export default {
  name: "HeroMain"
}
</script>
<style scoped>
.hero{
    background: url("~@/assets/hero_main_blur.png") no-repeat right 30% top 0%;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    min-height: 340px;
}
.hero.replace {
background: url("~@/assets/hero_main.png") no-repeat right 30% top 0%;
background-size: cover;
    height: 100vh;
    width: 100vw;
    min-height: 340px;
}
.slogan{
    font-size:max(1.0em, min(2em, calc(100vw * 4 / 75)));
    color: #fff;
}
.accent_border{
    border: 5px solid #fff;
    margin: 13vh 5vw 5vh 5vw;
    width: 100%;
    max-width: 90vw;
    padding: 20vh 5vw;
}
</style>