<template>
  <div id="app">
      <son1></son1>
      <son2></son2>
      <hr>
      <button @click='changeName'>changeName</button>
      <button @click='changeNameNet'>changeNameNet</button>
      {{this.$store.getters.doubleName}}
  </div>
</template>

<script>
import son1 from './son1'
import son2 from './son2'

export default {
  components:{son1,son2},
  methods: {
    changeName(){
      this.$store.commit('changeStateName',{us:'来自同步的数据',ps:123})
    },
    changeNameNet(){
      // 触发mutations 里的某一个方法
      // this.$store.commit('changeStateName',{us:'hehe',ps:123})
      // 触发action 里的方法 
      // this.$store.dispatch('getNetName',{us:123,ps:456})
  
      setTimeout(()=>{
        let  name='来自星星的名字'
        this.$store.commit('changeStateName',{us:name,ps:123})
      },1000)
    }
  },
  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
