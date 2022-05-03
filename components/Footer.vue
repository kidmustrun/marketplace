<template>
  <footer class="footer">
    <div class="row">
      <div class="col-md">
        <ul>
          <li>
            <NuxtLink to="/">Способы оплаты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Доставка</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Возврат товара</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="col-md">
        <ul>
          <li>
            <NuxtLink to="/">О нас</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Реквизиты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Контакты</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="col-md text-center">
        <p>
          2022 Ярмакофф - модный интернет-магазин одежды от российских
          производителей.<br />
          Все права защищены. Доставка по всей России
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
.footer {
  background-color: #b56a0e;
  color: #fff;
  position: absolute;
  bottom: 0;
  padding: 50px;
  width: 100%;
}
.footer a {
  color: #fff;
  text-decoration: none;
}
ul li {
  list-style-type: none;
}
@media screen and (max-width:768px) {
    .col-md{
        text-align: center;
    }
    ul{
        margin: 0;
    }
    p{
        margin-top: 20px;
    }
}
</style>
