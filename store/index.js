import Cookies from 'js-cookie'
const requestHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};
const url_base = 'http://marketplace.std-941.ist.mospolytech.ru/'
export const state = () => ({
  url_base: 'http://marketplace.std-941.ist.mospolytech.ru',
  categories_women: [],
  subcategories_women: [],
  categories_men: [],
  subcategories_men: [],
  products: [{ id: 1, title: 'sfsaf', category_name: 'Джинсы' }],
  product: {},
  total_cost: 0,
  user: {},
  addresses: {},
  cart: [],
  orders:[], 
  shops:[],
  shop:{},
  products_in_shop:[],
  add_product:{},
  sizes:[]
})
export const getters = {
  TOKEN: () => {
    return Cookies.get('token')
  },
  CATEGORIES: (state) => {
    return state.categories_women
  },
  SUBCATEGORIES: (state) => {
    return state.subcategories_women
  },
  CATEGORIES_MEN: (state) => {
    return state.categories_men
  },
  SUBCATEGORIES_MEN: (state) => {
    return state.subcategories_men
  },
  PRODUCTS: (state) => {
    return state.products
  },
  PRODUCT: (state) => {
    return state.product
  },
  TOTAL_COST: (state) => {
    return state.total_cost
  },
  URL_BASE: (state) => {
    return state.url_base
  },
  USER: (state) => {
    return state.user
  },
  ADDRESSES: (state) => {
    return state.addresses
  },
  CART: (state) => {
    return state.cart
  },
 ORDERS: (state) => {
    return state.orders
  },
  SHOPS: (state) =>{
    return state.shops
  },
  SHOP: (state) =>{
    return state.shop
  },
  PRODUCTS_IN_SHOP: (state) =>{
    return state.products_in_shop
  },
  ADD_PRODUCT: (state) =>{
    return state.add_product
  },
  SIZES: (state) =>{
    return state.sizes
  }
}
export const mutations = {
  SET_TOKEN: (state, payload) => {
    Cookies.set('token', payload);
  },
  DELETE_TOKEN: (state) => {
    Cookies.remove('token')
  },
  SET_CATEGORIES: (state, payload) => {
    state.categories_women = payload
  },
  SET_SUBCATEGORIES: (state, payload) => {
    state.subcategories_women = payload
  },
  SET_CATEGORIES_MEN: (state) => {
    const result = state.categories_women.filter(
      (category) => category.not_for_men == 0
    )
    state.categories_men = result
  },
  SET_SUBCATEGORIES_MEN: (state) => {
    const result = state.categories_men.filter(
      (subcategory) => subcategory.not_for_men == 0
    )
    state.subcategories_men = result
  },
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  },
  SET_PRODUCT: (state, payload) => {
    state.product = payload
  },
  SET_TOTAL_COST: (state, payload) => {
    state.total_cost = payload
  },
  ADD_TOTAL_COST: (state, payload) => {
    state.total_cost += payload
  },
  REDUCE_TOTAL_COST: (state, payload) => {
    state.total_cost -= payload
  },
  CHANGE_COUNT_IN_CART: (state, item) =>{
    let product = state.cart.find(product => product.product.id === item.id)
   
    product.count = item.count
    console.log(product, item)
  },
  SET_USER: (state, payload) => {
    state.user = payload
  },
  SET_ADDRESSES: (state, payload) => {
    state.addresses = payload
  },
  SET_CART: (state, payload) => {
    state.cart = payload
  },
  SET_ORDERS: (state, payload) => {
    state.orders = payload
  },
  SET_SHOPS: (state, payload) => {
    state.shops = payload
  },
  SET_SHOP: (state, payload) => {
    state.shop = payload
  },
  SET_PRODUCTS_IN_SHOP:(state, payload) => {
    state.products_in_shop = payload
  },
  SET_ADD_PRODUCT:(state, payload) => {
    state.add_product = payload
  },
  SET_SIZES:(state, payload) => {
    state.sizes = payload
  },
}
export const actions = {
  async getCategories(context) {
    const response = await this.$axios.get(`${url_base}categories`)
    context.commit('SET_CATEGORIES', response.data)
    context.commit('SET_CATEGORIES_MEN')
  },
  async getSubcategories(context) {
    const response = await this.$axios.get(`${url_base}subcategories`)
    context.commit('SET_SUBCATEGORIES', response.data)
    context.commit('SET_SUBCATEGORIES_MEN')
  },
  async getProductsByCategory(context, params) {
    if (params.category) {
      const response = await this.$axios.get(
        `${url_base}products/category/${params.category}/${params.gender}`
      )
      context.commit('SET_PRODUCTS', response.data)
    } else {
      const response = await this.$axios.get(`${url_base}products`)
      context.commit('SET_PRODUCTS', response.data)
    }
  },
  async getProduct(context, id) {
    const response = await this.$axios.get(`${url_base}products/product/${id}`)
    context.commit('SET_PRODUCT', response.data)
  },
  async searchProduct(context, query) {
    const response = await this.$axios.get(`${url_base}products/find/${query}`)
    context.commit('SET_PRODUCTS', response.data)
  },
  async register(context, user) {
    const response = await this.$axios.$post(`${url_base}register`, user, requestHeaders)
    context.commit('SET_TOKEN', response[1])
    location.reload()
  },
  async login(context, user) {
      const response = await this.$axios.$post(`${url_base}login`, user, requestHeaders);
      context.commit('SET_TOKEN', response[1])
      location.reload()
    
  },
  async logout(context) {
    const response = await this.$axios.$post(`${url_base}logout`, null, {headers: {Authorization: Cookies.get('token')}})
    context.commit('DELETE_TOKEN')
    location.reload()
  },
  async getUser(context) {
    const response = await this.$axios.get(`${url_base}api/v1/user`, {headers: {Authorization: Cookies.get('token')}} )
    context.commit('SET_USER', response.data.data)
  },
  async getAddresses(context) {
    const response = await this.$axios.get(`${url_base}api/v1/user/addresses`, {headers: {Authorization: Cookies.get('token')}} )
    context.commit('SET_ADDRESSES', response.data)
  },
  async addProductInCart(context, product) {
    const response = await this.$axios.$post(`${url_base}api/v1/cart/add`, product, {headers: {Authorization: Cookies.get('token')}})
  
  },
  async getCart(context){
    const response = await this.$axios.get(`${url_base}api/v1/cart`, {headers: {Authorization: Cookies.get('token')}} )
    context.commit('SET_CART', response.data)
  },
  async deleteProduct(context, product){
    const response = await this.$axios.post(`${url_base}api/v1/cart/del`, product, {headers: {Authorization: Cookies.get('token')}} )
    context.dispatch('getCart')
    location.reload()
  },
  async createOrder(context, order){
    const response = await this.$axios.post(`${url_base}api/v1/orders/create`, order, {headers: {Authorization: Cookies.get('token')}} )
    context.commit('SET_CART', [])
    location.reload()
  },
  async getOrders(context){
    const response = await this.$axios.get(`${url_base}api/v1/orders`, {headers: {Authorization: Cookies.get('token')}} )
    context.commit('SET_ORDERS', response.data)
  },
  async getMyShops(context){
    const response = await this.$axios.get(`${url_base}api/v1/seller/myShops`, {headers: {Authorization: Cookies.get('token')}} )
    context.commit('SET_SHOPS', response.data)
  },
  async getMyShop(context, id){
    const response = await this.$axios.get(`${url_base}api/v1/seller/myShop/${id}`, {headers: {Authorization: Cookies.get('token')}} )
    context.commit('SET_SHOP', response.data)
  },
  async getProductsInShop(context, id){
    const response = await this.$axios.get(`${url_base}shops/products/${id}` )
    context.commit('SET_PRODUCTS_IN_SHOP', response.data)
  },
 async addPhoto(context,data){
  await this.$axios.post(`${url_base}api/v1/seller/addPhoto/${data.id}`, data.photos.photos, {headers: {Authorization: Cookies.get('token'), 'Content-Type': 'multipart/form-data'}} )
  this.$router.push(`/account/shops/${data.photos.shop_id}`)
 
 
},
 async addProduct(context,data){
  const response = await this.$axios.post(`${url_base}api/v1/seller/addProduct`, data.product, {headers: {Authorization: Cookies.get('token')}} )
  context.dispatch('addPhoto',{id: response.data.id, photos: data.photos})

},
async getSizes(context){
  const response = await this.$axios.get(`${url_base}sizes` )
  context.commit('SET_SIZES', response.data)
},
async addSizes(context, data){
  await this.$axios.post(`${url_base}api/v1/seller/addStorage/${data.id}`, data.sizes, {headers: {Authorization: Cookies.get('token')}} )
location.reload()
},
async createShop(context, data){
  await this.$axios.post(`${url_base}api/v1/seller/addShopRequest`, data, {headers: {Authorization: Cookies.get('token')}} )
  this.$router.push(`/account`)
},
}
