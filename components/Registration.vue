<template>

    <div class="wrapper_container">
        <div class="container-auth">
            <h4>Регистрация</h4>
    <form class="container-form">
    <div class="form-group">
       <label for="exampleInputEmail1">Имя *</label>
       <input type="name" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя">
       
    </div>
    <div class="form-group">
       <label for="exampleInputPassword1">Фамилия *</label>
       <input type="name" required class="form-control" id="exampleInputPassword1" placeholder="Введите фамилию">
       
    </div>
    <div class="form-group">
       <label for="exampleInputEmail1">Почта</label>
       <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="magazin@mail.ru">
       
    </div>
    <div class="form-group">
       <label for="exampleInputPassword1">Пароль</label>
       <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
    </div>
    <div class="form-group">
       <label for="exampleInputPassword1">Повторите пароль</label>
       <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
       <h6  class="form-text ">Уже зарегистрированы? Авторизуйтесь <NuxtLink to="/authorization/"> здесь</NuxtLink></h6>
    </div>
    <div class="d-flex justify-content-center">
    <button type="submit" class="button btn center btn-primary">Зарегистрироваться</button>
    </div>
   </form>
            
           
        </div>
    </div>
        


    
</template>
<script>
export default {
  name: "Registartion"
}
</script>

<style scoped>
.wrapper_container {
    background: url("~@/assets/auth.jpg") no-repeat right 30% top 0%;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    min-height: 1090px;
    margin-bottom: -260px;
    padding-top: 20px; 
}
.container-auth{
    width: 35vw;
    height: 130vh;
    background-color: #869ED9;
    margin-top: auto;
    margin-bottom: auto;
    margin: auto auto;
    border-radius: 10px;
    border: 2px solid #FFFEFE;
    box-shadow: 8px 32px 4px rgba(0, 0, 0, 0.25);
    
}
h4{
    font-size: 36px;
    color: #FFFFFF;
    margin-top: 46px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
}
.container-form{
    padding: 40px 35px;
}
label{
    font-size: 24px;
    color: #FFFFFF;
    margin-bottom: 10px;
}
input{
    margin-bottom: 21px;
    height: 56px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.53);
    
}
h6{
    text-align: center;
    color: #FFFFFF;
    font-size: 16px;
}
.button{
    margin-top: 80px;
    background: #0D2C48;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 21px;
    width: 85%;
    margin-right: auto;
    margin-left: auto;
    transition: all 0.5s;
}
.button:hover{
    transition: all 0.5s;
    background: #123d63;
}
@media (max-width: 1450px) {
    .container-auth{
        width: 60vw;
        height: 90%;
    }
  
}
@media (max-width: 762px) {
  .wrapper_container {
      margin-bottom: -90px;

  }
}
@media (max-width: 530px) {
    .container-auth{
        width: 90vw;
        height: 90%;
    }
}
</style>