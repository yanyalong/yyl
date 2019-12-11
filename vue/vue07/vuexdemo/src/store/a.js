export default {
    namespaced:true,
    state:{
      name:'韩梅梅'
    },
    mutations:{
      changeName(state,name){
        state.name=name
      }
    }
}