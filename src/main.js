/*
 * @Author       : yznaisy
 * @Date         : 2020-08-15 17:36:58
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-15 17:44:00
 * @FilePath     : \antdv\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')