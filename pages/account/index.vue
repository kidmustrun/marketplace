<template>
  <div class="account">
    <HeaderBackground />
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center">
 <h1><b>Личный кабинет</b></h1>
 <span class="link" @click="logout">Выйти</span>
        </div>
     
      <div class="row">
        <div class="col-sm-3">
          <div class="sticky-nav">
            <ul class="nav flex-md-column">
              <li class="nav-item">
                <span class="nav-link" :class="{active: profile}" @click="changeTab('profile')"
                  ><b>Профиль</b></span
                >
              </li>
              <li class="nav-item">
                <span class="nav-link" :class="{active: orders}" @click="changeTab('orders')"
                  ><b>Мои заказы</b></span
                >
              </li>
              <li class="nav-item">
                <span class="nav-link" :class="{active: shops}" @click="changeTab('shops')"
                  ><b>Мои магазины</b></span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-9">
    <Profile v-if="profile"/>
    <Orders v-if="orders"/>
    <Shops v-if="shops"/>
      </div>
      </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
    middleware: 'auth',
  data() {
    return {
      profile: true,
      orders: false,
      shops: false,
    }
  },
  methods: {
    changeTab(q) {
      if (q == 'profile') {
        this.profile = true
        this.orders = false
        this.shops = false
      } else if (q == 'orders') {
        this.profile = false
        this.orders = true
        this.shops = false
      } else if (q == 'shops') {
        this.profile = false
        this.orders = false
        this.shops = true
      }
    },
    logout(){
       this.$store.dispatch('logout')
    }
  },
}
</script>
<style scoped>
.nav-item span {
  color: #aaa;
  cursor: pointer;
}
.active {
  color: #000 !important;
}
.link{
  text-decoration: #000 underline;
  cursor: pointer;
}
</style>
