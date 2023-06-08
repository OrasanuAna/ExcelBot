import Vue from 'vue'
import Vuex from 'vuex'
import feathersClient from '../feathers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    signup (context, payload) {
      return feathersClient.service('users').create({
        email: payload.username,
        password: payload.password
      })
    }
  },
  modules: {
  }
})
