<template>
  <div id="app">
    这里是less测试
    <div>
      div1
      <div>
        div2
        <div>
          div3
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// scoped样式作用域 防止相同类名的样式 混合
@color:red;

.test(@w,@h,@color){
  width: @w;
  height: @h;
  background: @color;
}
#app{
  background: @color;
  div{
    color: green;
    div{
      .test(100px,100px,yellow);
      div{
         .test(50px,50px,blue);
      }
    }
  }
}
// #app div div div{
//   color:blue;
// }
</style>
