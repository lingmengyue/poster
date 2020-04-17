import Vue from 'vue'
import App from './App.vue'
import "./assets/css/common.css" //引入全局css
import router from './assets/js/router'; //引入自定义路由文件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
