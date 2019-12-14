<template>
  <div id="app">
  <transition 
    enter-active-class=" bounceInLeft animated"
    leave-active-class=" animated bounceOutRight"
  >
    <div class='red' v-if='show' key='1'>

    </div>
  </transition> 
   
   <button @click='toggle'>toggle</button>
  </div>
</template>

<script>

export default {

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
@import  './animate.css';
div{
  width: 100px;
  height: 100px;
  margin-left:150px; 
}
.red{
  background: red;
}
.green{
  background: green;
}

</style>
