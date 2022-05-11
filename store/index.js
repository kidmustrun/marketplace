const url_base = 'http://564e-176-59-43-77.ngrok.io/'
export const state = () => ({
  url_base: 'http://564e-176-59-43-77.ngrok.io',
  token: '',
  categories_women: [],
  categories_men: [],
  products: [{ id: 1, title: 'sfsaf', category_name: 'Джинсы' }],
  product: {},
  total_cost: 0,
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
  TOTAL_COST: (state) => {
    return state.total_cost
  },
  URL_BASE: (state) => {
    return state.url_base
  },
}
export const mutations = {
  SET_TOKEN: (state, payload) => {
    state.token = payload
    document.cookie = `token=${payload}`
  },
  DELETE_TOKEN: (state) => {
    state.token = ''
    document.cookie = `token=""`
  },
  SET_CATEGORIES: (state, payload) => {
    state.categories_women = payload
  },
  SET_CATEGORIES_MEN: (state) => {
    const result = state.categories_women.filter(
      (category) => category.not_for_men == 0
    )
    state.categories_men = result
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
}
export const actions = {
  async getCategories(context) {
    const response = await this.$axios.get(`${url_base}categories`)
    context.commit('SET_CATEGORIES', response.data)
    context.commit('SET_CATEGORIES_MEN')
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
    const response = await this.$axios.post(`${url_base}register`, user)
    context.commit('SET_TOKEN', response.data[1])
  },
  async login(context, user) {
    if (!document.cookie.token) {
      const response = await this.$axios.post(`${url_base}login`, user)
      context.commit('SET_TOKEN', response.data[1])
    } else context.commit('SET_TOKEN', document.cookie.token)
  },
  async logout(context) {
    const response = await this.$axios.post(`${url_base}logout`, null, {
      Authorization: document.cookie.token,
    })
    context.commit('DELETE_TOKEN')
  },
}
