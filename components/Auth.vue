<template>

    <div class="wrapper_container">
        <div class="container-auth">
            <h4>Авторизация</h4>
    <form class="container-form">
    <div class="form-group">
       <label for="exampleInputEmail1">Почта</label>
       <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="magazin@mail.ru">
       
    </div>
    <div class="form-group">
       <label for="exampleInputPassword1">Пароль</label>
       <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
       <h6  class="form-text ">Нет учетной записи? Зарегистрируйтесь <NuxtLink to="/registration/"> здесь</NuxtLink></h6>
    </div>
    <div class="d-flex justify-content-center">
    <button type="submit" class="button btn center btn-primary">Войти</button>
    </div>
   </form>
            
           
        </div>
    </div>
        


    
</template>
<script>
export default {
  name: "Auth"
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
    padding-top: 5vh; 
}
.container-auth{
    width: 35vw;
    height: 90vh;
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
    margin-top: 120px;
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

@media (max-width: 1050px) {
    .container-auth{
        width: 80vw;
        height: 70%;
    }
    .wrapper_container {
        padding-top: 20%;
    }
    .button{
    margin-top: 120px;
    }
  
}
</style>