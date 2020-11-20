import Vue from 'vue'
import Vuex from 'vuex'
// import { searchMovies } from '@/api/movies.api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    moviesData: {},
    favoriteMovies: []
  },
  getters: {
    getMoviesData: (state) => {
      return state.moviesData
    },
    getFavoriteMovies: (state) => {
      return state.favoriteMovies
    },
    getTotalFavoriteMovies: (state) => {
      return state.favoriteMovies.length
    }
  },
  mutations: {
    UPDATE_STATE (state, payload) {
      state[payload.key] = payload.data
    }
  },
  actions: {
    updateState ({ commit }, dataObject) {
      // DATA OBJECT SHOULD HAVE A KEY field with the state property name and data that will be updated to that property
      if (dataObject.key) {
        commit('UPDATE_STATE', dataObject)
      }
    }
  }
})

export default store
