import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import AlertCmp from './components/Shared/Alert.vue'

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

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB1TJzWHeCO3EIz4waVvJExifsW4zMKM_c',
      authDomain: 'devmeetup-vuejs-60339.firebaseapp.com',
      databaseURL: 'https://devmeetup-vuejs-60339.firebaseio.com',
      projectId: 'devmeetup-vuejs-60339',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignin', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
