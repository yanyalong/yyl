<template>
  <div class="progress">
  <div>
    <div class='startTime'>{{startTime|time}}</div>
    <div class='progress-box'>
        <div class='progress-wrapper'>
            <div class='progress-content' ref='content'> 

            </div>
            <div class="dot" 
              ref='dot'
              @touchstart='touchStart'
              @touchmove = 'touchMove'
            >
              <div> </div>
            </div>
        </div>
    </div>
    <div class='endTime'> {{endTime|time}}</div>
  </div>
  </div>
</template>

<script>
export default {
 props:['startTime','endTime'],
 methods:{
   touchStart(){},
   touchMove(e){
      // console.log(e.touches[0].clientX) 
      let distance=(e.touches[0].clientX-50)
      let time=distance/270*this.endTime
      console.log(time)
      this.$emit('changeTime',time,this.$refs.dot)
      this.$refs.dot.style.left=distance+'px'

   }
 },
 filters:{
   time(data){
     let m =parseInt(data/60)
     let s=parseInt(data%60)>9?parseInt(data%60):'0'+parseInt(data%60)
     return `${m}:${s}`
   }
 },
 watch:{
    startTime(newTime,oldTime){
      let precent=newTime/this.endTime*100
      this.$refs.content.style.width=precent+'%'
    }
 }
}
</script>
<style scoped lang="less">
@import '~style/index.less';
.progress{
  height: 100px;
  div{
    
    display: flex;
    justify-content: space-around;
    .startTime{
      width: 50px;
      text-align: center;
    }
    .entTime{
      width: 50px;
      text-align: center;
    }
    .progress-box{
     
      .progress-wrapper{
         position: relative;
       
        .w(270);
        height: 10px;
        background: @black;
        .progress-content{
          position: absolute;
          left: 0;
          top: 0;
          height: 10px;
          background: @yellow;
        }
        .dot{
          position: absolute;
          left: 0;
          top:-5px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #ccc;;
          display: flex;
          justify-content: center;
          align-items: center;
          div{
            width: 60%;
            height: 60%;
            background: @yellow;
            border-radius:50%; 
          }
        }
      }
    }
  }
}
</style>
