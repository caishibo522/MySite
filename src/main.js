import "@/mock";
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less";
import router from "./router";
import {showMessage} from "./utils";
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.prototype.$showMessage = showMessage;
Vue.directive('loading',vLoading)
Vue.directive('lazy',vLazy);
import "./eventBus";
import store from "./store";
store.dispatch('setting/fetchSetting');
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
