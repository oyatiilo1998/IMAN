import request from '@/utils/request'
const customUrl = '/product'
const category = {
    state: {
        categories: []
    },
    getters: {
      getProducts: state => state.categories
    },
    mutations: {
        SET_PRODUCTS (state, payload) {
            state.bonds = payload
        }
    },
    actions: {
      getProducts ({ commit }, params) {
        return new Promise((resolve, reject) => {
        request({
            url: customUrl,
            method: 'get',
            params
        })
          .then(result => {
          commit('SET_PRODUCTS', result.data)
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    getProduct ({ commit }, id) {
      return new Promise((resolve, reject) => {
        request({
          url: customUrl + '/' + id,
          method: 'get'
        }).then(res => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    postCategory ({ commit }, data) {
      return new Promise((resolve, reject) => {
      request({
          url: customUrl,
          method: 'post',
          data: data
      })
        .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
    })
  },
  updateCategory ({ commit }, data) {
    return new Promise((resolve, reject) => {
    request({
        url: customUrl + '/' + data.id,
        method: 'put',
        data: data
    })
      .then(result => {
      resolve(result)
    })
    .catch(error => {
      reject(error)
    })
  })
},
  deleteCategory ({ commit }, id) {
  return new Promise((resolve, reject) => {
    request({
        url: customUrl + '/' + id,
        method: 'delete'
    })
      .then(result => {
      resolve(result)
    })
    .catch(error => {
      reject(error)
    })
  })
}
  }
}
  export default category
