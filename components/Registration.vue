<template>
  <div class="wrapper_container">
    <div class="container-auth">
      <h4>Регистрация</h4>
      <form class="container-form">
        <div class="form-group">
          <label for="exampleInputName1">Имя *</label>
          <input
            type="name"
            v-model="name"
            required
            class="form-control"
            id="exampleInputName1"
            placeholder="Введите имя"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputSurName1">Фамилия *</label>
          <input
            type="name"
            v-model="surname"
            required
            class="form-control"
            id="exampleInputSurName1"
            placeholder="Введите фамилию"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputLastName1">Отчество</label>
          <input
            type="name"
            v-model="lastname"
            class="form-control"
            id="exampleInputLastName1"
            placeholder="Введите отчество"
          />
        </div>
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
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Повторите пароль</label>
          <input
            type="password"
            v-model="password_confirmation"
            required
            class="form-control"
            id="exampleInputPassword2"
            placeholder="Введите пароль"
          />
          <h6 class="form-text">
            Уже зарегистрированы? Авторизуйтесь
            <NuxtLink to="/authorization/"> здесь</NuxtLink>
          </h6>
        </div>
     
      </form>
         <div class="d-flex justify-content-center pb-3">
          <button class="button btn center btn-primary" @click="sendReg">
            Зарегистрироваться
          </button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Registartion',
  data() {
    return {
      name: '',
      surname: '',
       lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    sendReg() {
      this.$store.dispatch('register', {
        first_name: this.name,
        second_name: this.surname,
        last_name: this.lastname,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        remember: true,
        phone: '898827628'
      })
      this.$router.push('/account')
    },
  },
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
  padding-top: 20px;
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
@media (max-width: 1450px) {
  .container-auth {
    width: 60vw;
  }
}
@media (max-width: 762px) {
  .wrapper_container {
    margin-bottom: -90px;
  }
}
@media (max-width: 530px) {
  .container-auth {
    width: 90vw;
  }
}
</style>
