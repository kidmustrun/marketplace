<template>
  <div class="wrapper_container">
    <div class="container-auth">
      <h4>Авторизация</h4>
      <form class="container-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Почта</label>
          <input
            type="email"
            v-model="email"
            required
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="magazin@mail.ru"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            v-model="password"
            required
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Введите пароль"
          />
          <h6 class="form-text">
            Нет учетной записи? Зарегистрируйтесь
            <NuxtLink to="/registration/"> здесь</NuxtLink>
          </h6>
        </div>
        <div class="d-flex justify-content-center">
          
        </div>
      </form>
       <div class="d-flex justify-content-center pb-3">
      <button class="button btn center btn-primary" @click="sendLogin">
            Войти
          </button>
       </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Auth',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    sendLogin() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
        remember: true,
      })
    },
}
}
</script>

<style scoped>
.wrapper_container {
  background: url('~@/assets/auth.jpg') no-repeat right 30% top 0%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  min-height: 1090px;
  margin-bottom: -260px;
  padding-top: 5vh;
}
.container-auth {
  width: 35vw;
  background-color: #869ed9;
  margin-top: auto;
  margin-bottom: auto;
  margin: auto auto;
  border-radius: 10px;
  border: 2px solid #fffefe;
  box-shadow: 8px 32px 4px rgba(0, 0, 0, 0.25);
}
h4 {
  font-size: 36px;
  color: #ffffff;
  margin-top: 46px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}
.container-form {
  padding: 40px 35px;
}
label {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
}
input {
  margin-bottom: 21px;
  height: 56px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.53);
}
h6 {
  text-align: center;
  color: #ffffff;
  font-size: 16px;
}
.button {
  background: #0d2c48;
  border-radius: 10px;
  color: #ffffff;
  font-size: 21px;
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  transition: all 0.5s;
}
.button:hover {
  transition: all 0.5s;
  background: #123d63;
}

@media (max-width: 1050px) {
  .container-auth {
    width: 80vw;
  }
  .wrapper_container {
    padding-top: 20%;
  }
}
</style>
