import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import variables from './sass/variables.scss'

Vue.config.productionTip = false

new Vue({
  vuetify,
  variables,
  router,
  render: h => h(App)
}).$mount('#app')
