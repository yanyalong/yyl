export default {
    namespaced:true,
    state:{age:16},
    mutations:{
      changeAge(state,age){
        state.age=age
      }
    }

}