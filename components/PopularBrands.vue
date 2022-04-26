<template>
  <div class="container">
    <h1>Популярные бренды</h1>
    <div class="row">
      <div class="col-md mt-3">
        <div class="brand brand-1">
          <img src="~/assets/memos.png" />
          <div class="blur">
              <h2><NuxtLink to="/memos"
      ><b>МЕМос</b></NuxtLink></h2>
          </div>
        </div>
      </div>
      <div class="col-md mt-3">
        <div class="brand brand-2">
          <img src="~/assets/gjelka.png" />
          <div class="blur">
              <h2><NuxtLink to="/gjelka"
      ><b>Gjelka</b></NuxtLink></h2>
          </div>
        </div>
      </div>
      <div class="col-md mt-3">
        <div class="brand brand-3">
          <img src="~/assets/fick.png" />
          <div class="blur">
            <h2><NuxtLink to="/fick"
      ><b>FICK</b></NuxtLink></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularBrands',
}
</script>
<style scoped>
.brand {
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.brand img {
  width: 100%;
  object-fit: cover;
}
.brand-1 {
  border: 15px solid #ae080f;
}
.brand-2 {
  border: 15px solid #b56a0e;
}
.brand-3 {
  border: 15px solid #0d2c48;
}
.brand::after,
.brand::before {
  content: '';
  display: block;
  border: 15px solid #fff;
  z-index: 20;
  position: absolute;
}

.brand::after {
  left: -15px;
  top: 20px;
  right: -15px;
  bottom: 20px;
  border-top: none;
  border-bottom: none;
}

.brand::before {
  left: 40px;
  top: -15px;
  right: 40px;
  bottom: -15px;
  border-left: none;
  border-right: none;
}
.blur {
  position: absolute;
  top: 15%;
  margin-left: auto;
  margin-right: auto;
  left: 10%;
  right: 10%;
  text-align: center;
  height: 70%;
  background: rgba(246, 246, 246, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 35;
}
@supports (-moz-appearance:none) {
 .blur {
     background: rgba(246, 246, 246, 0.8);
 }
 .blur h2 a{
color: #000 !important;
text-decoration: none;
}
}
.blur h2 a{
color: #fff;
text-decoration: none;
}
</style>
