<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col">
        <div class="row">
          <div class="flex-md-column col-4 col-xxl-2">
            <div class="prewiew mt-3">
              <img src="~/assets/dress_in_block.png" />
            </div>
            <div class="prewiew mt-3">
              <img src="~/assets/dress_in_block.png" />
            </div>
            <div class="prewiew mt-3">
              <img src="~/assets/dress_in_block.png" />
            </div>
            <div class="prewiew mt-3">
              <img src="~/assets/dress_in_block.png" />
            </div>
          </div>

          <div class="col-8 col-xxl-10">
            <div class="full-size mt-5">
              <img src="~/assets/dress_in_block.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col mt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Каталог</a></li>
          <li class="breadcrumb-item"><a href="#">Платье</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Платье "Весенний кэжуал"
          </li>
        </ol>
        <h1>Платье "Весенний кэжуал"</h1>
        <select class="form-select" name="size">
          <option disabled selected>Размеры</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <div class="row mt-4">
          <div class="col-3 d-flex align-items-center">
            <span class="price">5999 руб</span>
          </div>
          <div class="col-6">
            <button class="button_card">ДОБАВИТЬ В КОРЗИНУ</button>
          </div>
          <div class="col-2">
            <button class="button_card button_like">
              <img src="~/assets/heart.svg" />
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
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
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
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
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
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="similar_products mt-5">
        <h1>Другие товары продавца</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemBlock',
}
</script>
<style scoped>
.prewiew img {
  height: 20vh;
}
.full-size img {
  height: 80vh;
}
.price {
  font-size: 32px;
}
.button_card {
  border: 1px solid #000;
  background-color: #fff;
  height: 70px;
  width: 100%;
}
</style>
