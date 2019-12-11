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
import {mapMutations,mapActions} from 'vuex'
export default {
  components:{son1,son2},
  methods: {
    ...mapMutations(['changeStateName']),
    ...mapActions(['getNetName']),
    changeName(){
      this.changeStateName({us:'来自同步的数据',ps:123})
    
      // this.$store.commit('changeStateName',{us:'来自同步的数据',ps:123})
    },
    changeNameNet(){
      // this.$store.dispatch('getNetName',{us:123,ps:456})
       this.getNetName({us:123,ps:456})
    }
  },
  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
