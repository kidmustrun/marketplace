<template>
  <div class="new_collection mt-5 row ms-0 me-0">
    <div class="col-sm p-0">
      <img src="~/assets/new_collection.png" />
    </div>
    <div class="new_collection_text text-center col-sm">
      <h2>НОВАЯ КОЛЛЕКЦИЯ ОТ SAVAGE</h2>
      <p>
        Новые яркие образы, которые снесут голову всем и вернут во времена
        стиляг<br />
        Только качественные материалы и работа профессионалов
      </p>
      <button class="button_beige mt-5">Смотреть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCollection',
}
</script>
<style scoped>
.new_collection {
  position: relative;
}
.new_collection_text {
  background-color: #0d2c48;
  color: #fff;
  padding: 10vh 15vw;
  position: relative;
  right: 0;
  top: 5vh;
  height: 70%;
}
.new_collection_text p {
  font-size: max(1em, min(1.3em, calc(100vw * 4 / 75)));
}
img {
  position: relative;
  left: 0;
  object-fit: cover;
    width: 35vw;
  z-index: 1;
}
.button_beige {
  background: #b97e5e;
  border-radius: 50px;
  color: #fff;
  border: none;
  padding: 10px 30px;
  font-size: 24px;
}
@media screen and (max-width: 1200px) {
  .new_collection {
    position: static;
  }
  .new_collection_text {
    position: static;
  }
  img {
    width: 45vw;
    position: static;
    object-fit: cover;
    height: 100%;
  }
}
@media screen and (max-width: 576px) {
    .col-sm{
        text-align: center;
    }
  img {
    width: 90vw;
    height: 100%;
  }
  .new_collection_text {
    box-sizing: border-box;
    width: 100%;
    order: -1 !important;
  }
}
</style>
