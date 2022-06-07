import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters.js';
import * as mutations from './mutations.js';//이렇게 하면 export한 내용이 모두 담기게 된다.

//use를 사용하면 Vue를 사용하는 전역에서 Vuex를 사용할 수 있다.
Vue.use(Vuex);



const storage = {
  fetch(){
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0 ; i<localStorage.length ; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};


export const store = new Vuex.Store({
  state:{
    todoItems: storage.fetch()
  },
  getters: getters,
  mutations//이렇게 생략도 가능하고 위에처럼 mutations : mutations 로 해도 되고
});
