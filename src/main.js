import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, { theme: {
  primary: '#D32F2F',
  accent: '#FF5252',
  secondary: '#BDBDBD',
  info: '#42A5F5',
  warning: '#FFA000',
  error: '#D50000',
  success: '#81C784'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
