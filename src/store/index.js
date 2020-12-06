import Vue from 'vue'
import Vuex from 'vuex'
// dynamic router permission control (Experimental)
// import permission from './modules/async-router'
import app from './modules/app'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permission'
// custom module import panel
import category from './modules/Custom/Category'
import product from './modules/Custom/Product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    permission,
    user,
    app,
    category,
    product

  },
  state: {
    langs: [{
      title: 'English',
      key: 'en'
    },
    {
      title: 'Russian',
      key: 'ru'
    },
    {
      title: 'Uzbek',
      key: 'uz'
    }
  ]

  },
  mutations: {

  },
  actions: {

  },
  getters
})
