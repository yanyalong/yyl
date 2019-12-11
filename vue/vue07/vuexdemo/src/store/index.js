import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

// 创建全局状态（变量）管理对象
let store = new Vuex.Store({
  state:{
    name:'韩梅梅',
    age:'16',
    sex:0,
    phone:1231312313
  },
  //修改state里数据的唯一途径
  mutations:{
    changeStateName(state,params){
      // state 全局状态数据
      //params 通过commit 触发传递的方法
      console.log('修改state数据',state,params)
      state.name=params.us     
    }
  },
  // 异步存放的地方  请求成功后发起 commit 
  actions:{
    getNetName(context,params){
      console.log('触发actions',arguments)
      let {commit}=context
      setTimeout(()=>{
        let  name='来自星星的名字'
        commit('changeStateName',{us:name,ps:123})
      },500)
    }
  },
  // 派生属性 类似于computed 可以获取state前
  // 做数据的处理
  getters:{
    doubleName(state){
      return state.name+state.name 
    }
  }
})

export default store