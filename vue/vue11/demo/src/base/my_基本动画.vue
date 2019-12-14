<template>
  <div id="app">
  <transition-group name='hehe'>
    <div class='red' v-if='show' key='1'>

    </div>
    <div class='green' v-if='show' key='2'>

    </div>
  </transition-group> 
   
   <button @click='toggle'>toggle</button>
  </div>
</template>

<script>

export default {
//  created(){
//    if(!localStorage.getItem('token')){
//      this.$router.replace('/home')
//    }
//  }
methods:{
  toggle(){
    this.show=!this.show
  }
},
data(){
  return{
    show:true
  }
}

}
</script>

<style>
div{
  width: 100px;
  height: 100px;
}
.red{
  background: red;
}
.green{
  background: green;
}
.hehe-enter{
  opacity: 0;
}
.hehe-enter-to{
  opacity: 1;
}
.hehe-enter-active{
  transition: all  10s linear; 
}

.hehe-leave{
  opacity: 1;
}
.hehe-leave-to{
  opacity: 0;
}
.hehe-leave-active{
  transition: all  5s linear; 
}
</style>
