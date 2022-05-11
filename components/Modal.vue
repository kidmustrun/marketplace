<template>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      <div class="modal-header">
        <div class="container_image">
            <img src="~@/assets/galka.png" alt="">
        </div>
      </div>
      <div class="modal-body">
        <h4>Ваш закакз № успешно оформлен!</h4>
        <h5>Вы можете следить за выполнением своего заказа в личном кабинете. Благодарим за заказ и хорошего Вам дня!</h5>
        <div class="next d-flex justify-content-center"><a class="link_next">Перейти к заказам</a></div>
      </div>
    </div>
  </div>
</div>
        


    
</template>
<script>
export default {
  name: "Modal"
}
</script>

<style scoped>
.modal-header{
    border-bottom: none;
}
.modal{
    margin-top: 5%;
}
.container_image{
    margin: 15px auto;
    width: 65px;
    height: 100%;
}
.container_image img{
    width: 100%;
}
h4{
    text-align: center;
}
h5{
    text-align: center;
    font-size: 16px;
}
.link_next{
    width: 90%;
    background-color: #0D2C48;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 18px;
}
.next{
    margin-top: 60px;
    padding-top: 4px;
    height: 34px;
    width: 55%;
    background-color: #0D2C48;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
}
.btn-close{
    position: absolute;
    right: 10px;
    top: 10px;
}

</style>