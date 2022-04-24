<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    :class="{ 'bg-dark': width<992 }"
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
}),
methods: {
  updateWidth() {
    this.width = window.innerWidth;
  },
},
mounted() {
  window.addEventListener('resize', this.updateWidth);
  this.width = window.innerWidth;
},
}
</script>
<style scoped>
.navbar {
  padding: 20px;
}
img {
  height: max(1em, min(1.3em, calc(100vw * 4 / 75)));
}
.nav-item {
  font-size: max(1em, min(1.3em, calc(100vw * 4 / 75)));
}
</style>
