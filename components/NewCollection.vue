<template>
<div class="container-fluid">
        <div class="new_collection mt-5 row ms-0 me-0">
            <div class="col-sm">
            <img src="~/assets/new_collection.png">
            </div>
        <div class="new_collection_text text-center col-sm">
            <h2>НОВАЯ КОЛЛЕКЦИЯ ОТ SAVAGE</h2>
            <p>Новые яркие образы, которые снесут голову всем и вернут во времена стиляг<br>
Только качественные материалы и работа профессионалов</p>
<button class="button_beige mt-5">Купить</button>
    </div>
        </div>
        </div>
</template>

<script>
export default {
  name: 'NewCollection',
}
</script>
<style scoped>
.new_collection{
position: relative;
}
.new_collection_text{
    background-color: #0D2C48;
    color: #fff;
    padding: 10vh 20vw;
    position: absolute;
    top: 10vh;
    left: 30vw;
    width: 70vw;
}
.new_collection_text p{
   font-size: max(1em, min(1.3em, calc(100vw * 4 / 75)));
}
img{
    width: 35vw;
   
    position: absolute;
    left: 0;
    z-index: 1;
}
.button_beige{
    background: #B97E5E;
border-radius: 50px;
color: #fff;
border: none;
padding: 10px 30px;
font-size: 24px;
}
@media screen and (max-width: 992px){
    .new_collection{
        position: static;
    }
    .new_collection_text{
        position:static;
        padding: 10vh 10vw;
    }
    img{
        width: 45vw;
        position:static;
         object-fit: cover;
         height: 100%;
    }
}
@media screen and (max-width: 576px){

    img{
        width: 90vw;
        position:static;
         object-fit: cover;
         height: 100%;
    }
    .new_collection_text{
        box-sizing: border-box;
        width: 100%;
        order: -1 !important;
        
    }
}
</style>
