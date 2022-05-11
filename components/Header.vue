<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    :class="{ 'bg-dark': width < 992 || scroll > 20 }"
  >
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/"><b>ЯРМАРКОФФ</b></NuxtLink>
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
          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Женщинам
            </span>
            <ul
              v-if="categories_women[0]"
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li v-for="category in categories_women" :key="category.id">
                <NuxtLink
                  class="dropdown-item p-1"
                  :to="`/catalog/${category.trans}?gender=female`"
                  >{{ category.title }}</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Мужчинам
            </span>
            <ul
              v-if="categories_men[0]"
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li v-for="category in categories_men" :key="category.id">
                <NuxtLink
                  class="dropdown-item p-1"
                  :to="`/catalog/${category.trans}?gender=male`"
                  >{{ category.title }}</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Девочкам
            </span>
            <ul
              v-if="categories_women[0]"
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li v-for="category in categories_women" :key="category.id">
                <NuxtLink
                  class="dropdown-item p-1"
                  :to="`/catalog/${category.trans}?gender=girl`"
                  >{{ category.title }}</NuxtLink
                >
              </li>
            </ul>
          </li>
           <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Мальчикам
            </span>
            <ul
              v-if="categories_men[0]"
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li v-for="category in categories_men" :key="category.id">
                <NuxtLink
                  class="dropdown-item p-1"
                  :to="`/catalog/${category.trans}?gender=boy`"
                  :category="category.title"
                  >{{ category.title }}</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
<<<<<<< HEAD
            <NuxtLink class="nav-link active" aria-current="page" to="/login">Войти</NuxtLink>
=======
            <NuxtLink to="/authorization/" class="nav-link active" aria-current="page" href="#">Войти</NuxtLink>
>>>>>>> af8f50b3f7163161f9d5ff3c25d34d559d50add6
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/cart"
              ><img src="~/assets/cart.svg"
            /></NuxtLink>
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
    scroll: 0,
  }),
  computed: {
    categories_women() {
      return this.$store.getters.CATEGORIES
    },
    categories_men() {
      return this.$store.getters.CATEGORIES_MEN
    },
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    },
    updateScroll() {
      this.scroll = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth)
    this.width = window.innerWidth
    window.addEventListener('scroll', this.updateScroll)
    this.scroll = window.scrollY
  },
}
</script>
<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
.navbar {
  width: 100vw;
  transition: 0.3s ease;
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
