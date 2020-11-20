import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
