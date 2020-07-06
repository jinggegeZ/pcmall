import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
