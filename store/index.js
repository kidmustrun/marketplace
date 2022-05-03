const url_base ="http://d754-95-165-9-250.ngrok.io/"
export const state = () => ({
  token: '',
  categories_women: [],
  categories_men: [],
  products: [{id: 1, title: "sfsaf"}],
  product:{}
})
export const getters = {
  TOKEN: (state) => {
    return state.token
  },
  CATEGORIES: (state) => {
    return state.categories_women
  },
  CATEGORIES_MEN: (state) => {
    return state.categories_men
  },
  PRODUCTS: (state) => {
    return state.products
  },
  PRODUCT: (state) => {
    return state.product
  },
}
export const mutations = {
  SET_TOKEN: (state, payload) => {
    state.token = payload
  },
  SET_CATEGORIES: (state, payload) => {
    state.categories_women = payload
  },
  SET_CATEGORIES_MEN: (state) => {
    const result = state.categories_women.filter((category) => 
      category.not_for_men == 0
    )
    state.categories_men = result
  },
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  },
  SET_PRODUCT: (state, payload) => {
    state.product = payload
  },
}
export const actions = {
  async getCategories(context) {
    const response = await this.$axios.get(
      `${url_base}categories`
    )
    context.commit('SET_CATEGORIES', response.data)
    context.commit('SET_CATEGORIES_MEN')
  },
  async getProductsByCategory(context, params){
    if(params.category){
    const response = await this.$axios.get(
      `${url_base}products/category/${params.category}/${params.gender}`
      )
      context.commit('SET_PRODUCTS', response.data)
    }
    else {const response = await this.$axios.get(
      `${url_base}products`
      )
      context.commit('SET_PRODUCTS', response.data)
    }
     
    

  },
  async getProduct(context, id){
  const response = await this.$axios.get(
    `${url_base}products/product/${id}`
    )
    context.commit('SET_PRODUCT', response.data)
}
}
