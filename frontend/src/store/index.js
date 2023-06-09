import Vue from 'vue'
import Vuex from 'vuex'
import feathersClient from '../feathers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: false,
    user: null
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error,
    user: state => state.user
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async signup (context, payload) {
      context.commit('setLoading', true)
      context.commit('setError', false)
      try {
        await feathersClient.service('users').create({
          email: payload.username,
          password: payload.password
        })
        context.commit('setLoading', false)
      } catch (err) {
        context.commit('setLoading', false)
        context.commit('setError', err)
        throw err
      }
    },
    async login (context, payload) {
      context.commit('setLoading', true)
      context.commit('setError', false)
      try {
        const response = await feathersClient.authenticate({
          strategy: 'local',
          email: payload.username,
          password: payload.password
        })
        context.commit('setUser', response.user)
        context.commit('setLoading', false)
      } catch (err) {
        context.commit('setLoading', false)
        context.commit('setError', err)
        throw err
      }
    },
    async logout (context) {
      context.commit('setLoading', true)
      context.commit('setError', false)
      try {
        await feathersClient.logout()
        context.commit('setUser', null)
        context.commit('setLoading', false)
      } catch (err) {
        context.commit('setLoading', false)
        context.commit('setError', err)
        throw err
      }
    },
    async autoLogin (context) {
      context.commit('setLoading', true)
      context.commit('setError', false)
      try {
        const response = await feathersClient.reAuthenticate()
        context.commit('setUser', response.user)
        context.commit('setLoading', false)
      } catch (err) {
        context.commit('setLoading', false)
        throw err
      }
    }
  }
})
