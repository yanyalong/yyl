<template>
  <div id="app">
      <son1></son1>
      <son2></son2>
      <hr>
      <button @click="changeName('呵呵哒')"> 改名</button>
      <button @click="changeAge(88)"> 改名</button>

  </div>
</template>

<script>
import son1 from './son1'
import son2 from './son2'
import {mapMutations,mapActions} from 'vuex'
export default {
  components:{son1,son2},
  methods: {
    ...mapMutations({changeName:'A/changeName',
                     changeAge :'B/changeAge'
    })
  }

}
</script>

<style>

</style>
