import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)
import A from  './a'
import B from  './b'
let store = new Vuex.Store({
   modules:{A,B}
})
// let store = new Vuex.Store({
//   state:{
//     hehe:'根状态'
//   },
//   modules:{
//     "A":{
//       namespaced:true,
//       state:{name:'韩梅梅'},
//       mutations:{hehe(){},}
//     },
//     "B":{
//       namespaced:true,
//       state:{age:16},
//       mutations:{hehe(){}}
//     }
//   }
// })

/*
不分模块
store.state.name 
分模块
store.模块名.state.name

划分模块之后 state会被添加模块名 但是其他的getters  mutations  actions 和不分模块一样
namespace 命名空间 防止不同的模块有相同的名字
*/
export default store