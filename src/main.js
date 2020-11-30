import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PaginaCarregando from './components/PaginaCarregando'
//import './plugins/axios'


Vue.config.productionTip = false

Vue.component("PaginaCarregando", PaginaCarregando)

Vue.filter("precoFilter", valor => {
  valor = Number(valor)
  if(!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  } else {
    return ""
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
