<template>
  <div id="app">
     <ul>
       <li v-for='(item,index) in renderList' :key='index'
        :class='item.state?"green":"red"'
       >
         {{item.msg}}
         <button @click='del(index)'>del</button> 
         <span v-if='item.state'>已完成</span>
         <button v-else @click='update(index)'> 完成</button>
       </li>
     </ul>
  </div>
</template>

<script>

import  {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(['list']),
    ...mapGetters(['renderList'])
  },
  methods: {
    ...mapMutations(['delList']),
    ...mapActions(['updateListNet']),
    del(index){
      this.delList(index)
    },
    update(index){
       this.updateListNet(index)
    }
  },
}
</script>

<style>
.green{
  background: green;
}
.red{
 background: red;
}
</style>
