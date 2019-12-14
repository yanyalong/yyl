<template>
  <div class="progress">
    {{this.touchState}}
  <div>
    <div class='startTime'>{{startTime|time}}</div>
    <div class='progress-box'>
        <div class='progress-wrapper' ref='wrapper'>
            <div class='progress-content' ref='content'> 

            </div>
            <div class="dot" 
              ref='dot'
              @touchstart='touchStart'
              @touchmove = 'touchMove'
              @touchend='touchEnd'
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
 data(){
   return{
     touchState:false //有没有按住滑块
   }
 },
 methods:{
   touchStart(){
     this.touchState=true
     this.max=this.$refs.wrapper.clientWidth
   },
   touchMove(e){
      // console.log(e.touches[0].clientX) 
      let distance=(e.touches[0].clientX-50)

      this.time=distance/this.max*this.endTime
      console.log('拖动',this.time)
      
      // 判断最大和最小的移动距离
      if(distance>=0&&distance<=this.max){
        this.offset(distance)
        this.$emit('changeTime',this.time,false)
      }
   },
   touchEnd(){
     this.touchState=false
     //抬起事件 触发音乐的修改
     this.$emit('changeTime',this.time,true)
   },
   offset(distance){
      //  位置改变
    
      // 进度条的改变
      this.$refs.content.style.width=distance+'px'
      // 滑块的位置改变
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
      // 如果按下了 由滑块控制进度条 而不是歌曲播放
      if(!this.touchState){
        let precent=newTime/this.endTime*100
        this.$refs.content.style.width=precent+'%'
        // 小滑块的移动

      }
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
          width: 0px;
          background: @yellow;
        }
        .dot{
          position: absolute;
          left: -12px;
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
