<template>
  <div class="container">
              <ol class="breadcrumb mt-5">
          <li class="breadcrumb-item"><NuxtLink  :to="`/catalog/`">Каталог</NuxtLink></li>
          <li class="breadcrumb-item"><NuxtLink  :to="`/catalog/${product.categoryTrans}?gender=${this.$route.query.gender}`">{{product.category}}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">
            {{product.title}}
          </li>
        </ol>
    <div class="row">
      <div class="col-xl-6 col-md-12 col-12 text-center">
        <div class="row">
          <div class="d-flex flex-xxl-column flex-row col-xxl-2 order-xxl-first order-last justify-content-center">
            <div v-for="photo in product.photos" :key="photo" class="prewiew mt-3 me-xxl-0 me-2">
              <img :src="url +photo" />
            </div>
          </div>

          <div class="col-xxl-10">
            <div class="full-size mt-5">
              <img v-if="product.photos" :src="url + product.photos[0]" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12 col mt-5 p-xxl-0 p-5">

        <h1>{{product.title}}</h1>
        <select v-model="size" class="form-select">
          <option selected disabled value="">Размеры</option>
          <option v-for="product in product.storage" :key="product.id" :value="product.id">{{product.size}}</option>
        </select>
        <div class="row mt-4">
          <div class="col-md-5 col-12 d-flex align-items-center">
            <span class="price">{{product.cost}} руб</span>
          </div>
          <div class="col-md-5 col-8">
            <button class="button_card" @click="addProduct">ДОБАВИТЬ В КОРЗИНУ</button>
          </div>
          <div class="col-md-2 col-4">
            <button class="button_card button_like">
              <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66659 1.75C5.06492 1.75 1.33325 5.25867 1.33325 9.5875C1.33325 13.0819 2.79159 21.3754 17.1466 29.7592C17.4037 29.9078 17.6989 29.9864 17.9999 29.9864C18.3009 29.9864 18.5961 29.9078 18.8533 29.7592C33.2083 21.3754 34.6666 13.0819 34.6666 9.5875C34.6666 5.25867 30.9349 1.75 26.3333 1.75C21.7316 1.75 17.9999 6.5 17.9999 6.5C17.9999 6.5 14.2683 1.75 9.66659 1.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>
        </div>
        <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Доставка и возврат
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Подробности доставки и возврата
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Подробное описание
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {{product.desc}}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Оплата
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Подробности оплаты
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="similar_products mt-5">
      <h1>Другие товары продавца</h1>
      <!-- <div class="row mt-4">
        <div class="col">
          <ItemCard />
        </div>
        <div class="col">
          <ItemCard />
        </div>
        <div class="col">
          <ItemCard />
        </div>
        <div class="col">
          <ItemCard />
        </div>
        <div class="col">
          <ItemCard />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemBlock',
  data(){
    return{
      size: ''
    }
  },
    computed: {
    product() {
      return this.$store.getters.PRODUCT
    },
    url(){
       return this.$store.getters.URL_BASE
  },
  },
  methods:{
    addProduct(){
      if(this.size != "Размеры" && this.size!=0)
      this.$store.dispatch('addProductInCart', {product: +this.size, count: 1})
    }
  }
}
</script>
<style scoped>
.prewiew img {
  height: 20vh;
  width: 7.5vw;
  object-fit: cover;
  opacity: 0.5;
    transition: 0.3s ease;
}
.prewiew img:hover {
  opacity: 1;
  transition: 0.3s ease;
}
.full-size img {
  height: 80vh;
  width: 30vw;
  object-fit: cover;
}
.active_img img {
  opacity: 1 !important;
}
.price {
  font-size: 32px;
}
.button_card {
  border: 1px solid #000;
  background-color: #fff;
  height: 60px;
  width: 100%;
  transition: 0.3s ease;
}
.button_card:hover{
    color: #fff;
    background-color: #000;
    transition: 0.3s ease;
}
.button_like:hover{
    background-color: #fff;
    transition: 0.3s ease;
}
.button_like:hover svg{
    fill: #ff0d1989;
    transition: 0.3s ease;
}
</style>
