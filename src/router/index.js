import Vue from 'vue'
import VueRouter from 'vue-router'

// GET the COMPONENTS
import SearchMovies from '@/components/SearchMovies'
import SingleMovieDetails from '@/components/SingleMovieDetails'
import ListProducts from '@/components/products/ListProducts'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SearchMovies',
      component: SearchMovies
    },
    {
      path: '/favorites',
      name: 'SingleMovieDetails',
      component: SingleMovieDetails
    },
    {
      path: '/products',
      name: 'ListProducts',
      component: ListProducts
    }
  ]
})
