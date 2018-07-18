import Vue from 'vue'
const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList: state => state.orderList

}
const actions = {
  fetchOrderList ({commit, state}) {
    Vue.$http.post('/api/getOrderList', state.params)
      .then((res) => {
        commit('updateOrderList', res.data.list)
      }, () => {

      })
  }
}
const mutations = {
  updateOrderList (state, payLoad) {
    state.orderList = payLoad
  },
  updateParams (state, {key, val}) {
    state.params[key] = val
  }
}
export default{
  state,
  getters,
  actions,
  mutations
}
