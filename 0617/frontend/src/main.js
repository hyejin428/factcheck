import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueGoogleCharts from 'vue-google-charts'
import VueMoment from 'vue-moment'
Vue.use(VueMoment);
Vue.config.productionTip = false
Vue.use(VueGoogleCharts)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
