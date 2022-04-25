<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    :class="{ 'bg-dark': width<992 || scroll>20}"

  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><b>ЯРМАРКОФФ</b></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Женщинам</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Мужчинам</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Детям</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Войти</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><img src="~/assets/cart.svg"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
  width: 1000,
  scroll: 0
}),
methods: {
  updateWidth() {
    this.width = window.innerWidth;
  },
  updateScroll() {
    this.scroll = window.scrollY;
  },
},
mounted() {
  window.addEventListener('resize', this.updateWidth);
  this.width = window.innerWidth;
  window.addEventListener('scroll', this.updateScroll);
  this.scroll = window.scrollY;

},
}
</script>
<style scoped>
*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
.navbar{
  width: 100vw;
}
.container-fluid {
  margin: 20px;
}
img {
  height: max(1em, min(1.3em, calc(100vw * 4 / 75)));
}
.nav-item {
  font-size: max(1em, min(1.3em, calc(100vw * 4 / 75)));
}
</style>
