<template>
  <div>
    <HeaderBackground />
    <div class="container mt-5">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><NuxtLink  :to="`/account/`">Личный кабинет</NuxtLink></li>
      <li class="breadcrumb-item" aria-current="page"><NuxtLink  :to="`/account/shops/${this.$route.params.id}`">{{ shop.name }}</NuxtLink></li>
      <li class="breadcrumb-item active" aria-current="page">Добавить товар</li>
    </ol>
      <h1>Добавить товар в магазин {{ shop.name }}</h1>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="file" class="form-label"
              >Добавьте фотографию для вашего товара</label
            >
            <input
              class="form-control"
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3 row">
            <label for="name" class="col-sm-2 col-form-label"
              >Название товара</label
            >
            <div class="col-sm-10">
              <input
                v-model="title"
                required
                type="text"
                class="form-control"
                id="name"
                placeholder="Куртка женская"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="desc" class="col-sm-2 col-form-label"
              >Описание товара</label
            >
            <div class="col-sm-10">
              <textarea
                v-model="desc"
                required
                class="form-control"
                id="desc"
                rows="5"
                placeholder="Куртка женская утепленная свободного кроя, типа оверсайз, соответствует последним тенденциям современной моды. Куртка слегка расширена внизу, со свободным воротником и застежкой на кнопки. Боковые карманы с застежкой на магнитную кнопку. Уютная и удобная в носке. "
              ></textarea>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="cost" class="col-sm-2 col-form-label">Стоимость</label>
            <div class="col-sm-10">
              <input
                required
                type="number"
                class="form-control"
                id="cost"
                v-model="cost"
              />
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault1"
              v-model="gender"
              value="male"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Мужской
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              v-model="gender"
              value="female"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Женский
            </label>
          </div>
          <div class="mb-3 row">
            <select
              v-if="gender == 'female'"
              v-model="subcategory"
              class="form-select"
            >
              <option selected disabled value="">Выберите подкатегорию</option>
              <option
                v-for="subcategory in subcategories_women"
                :key="subcategory.id"
                :value="subcategory.id"
              >
                {{ subcategory.title }}
              </option>
            </select>
            <select v-else v-model="subcategory" class="form-select">
              <option selected disabled value="">Выберите подкатегорию</option>
              <option
                v-for="subcategory in subcategories_men"
                :key="subcategory.id"
                :value="subcategory.id"
              >
                {{ subcategory.title }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <h3>
        <button
          class="button_create px-md-5 py-md-2 p-2 float-end"
          @click="submit()"
        >
          + Добавить товар
        </button>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  data() {
    return {
      subcategory: '',
      gender: 'male',
      file: '',
      title: '',
      desc:'',
      cost: '',
    }
  },
  computed: {
    shop() {
      return this.$store.getters.SHOP
    },
    products() {
      return this.$store.getters.PRODUCTS_IN_SHOP
    },
    subcategories_women() {
      return this.$store.getters.SUBCATEGORIES
    },
    subcategories_men() {
      return this.$store.getters.SUBCATEGORIES_MEN
    },
  },
  created() {
    this.$store.dispatch('getMyShop', this.$route.params.id)
    this.$store.dispatch('getProductsInShop', this.$route.params.id)
    this.$store.dispatch('getSubcategories')
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0]
    },
    submit() {
      let formData = new FormData()
      formData.append('image', this.file)
      this.$store.dispatch('addProduct', {
        product:{
             shop_id: this.$route.params.id,
        title: this.title,
        desc: this.desc,
        cost: this.cost,
        subcategory_id: this.subcategory,
        gender: this.gender,
        color_id: 1,
        },
     photos: {
       
      photos: formData,
      shop_id: this.$route.params.id
       }
      })
     
    },
  }
}
</script>
<style scoped>
.button_create {
  background: #0d2c48;
  border-radius: 10px;
  color: #fff;
  border: none;
  transition: 0.3s ease;
  text-decoration: none;
}
.button_create:hover {
  background: #144169;
  transition: 0.3s ease;
}
</style>
