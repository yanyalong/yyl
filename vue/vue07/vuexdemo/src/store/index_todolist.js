import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    list:[{msg:"123",state:true},
          {msg:"456",state:true},
          {msg:"456",state:false}
        ],
    selIndex:1  //0 全部 -1 未完成 1已完成
  },
  mutations:{
    changeSelIndex(state,index){
      state.selIndex=index
    },
    addList(state,msg){
      state.list.push({msg:msg,state:false})
    },
    delList(state,index){
      state.list.splice(index,1)
    },
    updateList(state,index){
      state.list[index].state=true
    }
  },
  actions:{
    updateListNet(context,index){
      let {commit} = context
      setTimeout(()=>{
        commit('updateList',index)
      },1000)
    }
  },
  getters:{
    renderList(state){  
      // 实现全部已完成未完成 将state里的数据进行修改进行渲染
      // 采用数组里的filter过滤方法
      let result = state.list.filter((item)=>{
        switch (state.selIndex) {
          case 0:
            // 所有项返回
              return true
            break;
          case -1:
            // 只返回state 为false的项
            return item.state==false
          break;
          case 1:
            //返回 state 为真的项
            return item.state==true
          break;
          
        }
        return true
      })
      return  result
    }
  }
})

export default store