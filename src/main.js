import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store.js';//참고로 default 로 export 한게 아니라면 {} 를 써줘야 한다고 한다.

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //store: store, //이렇게 해도 되지만 es6스타일로 키 벨류가 같은 이름이라 store 로 생략 가능
  store,
}).$mount('#app')
