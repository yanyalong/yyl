### vue 
angular
react 
vue 

### vue 高效
1.vue使用虚拟dom减少真实dom操作提高页面的渲染效率
2.将开发者的精力从dom解放出来，转移到数据的处理

### 实例
new Vue（{
  el:'#app',
  data:{

  },
  methods:{

  }
}）
### 数据绑定
将date里的数据通过{{}}绑定到视图上
### 指令
内置指令
   v-for
   v-on
   v-bind
   v-if
   v-bind 
   v-show
   v-text
   v-html
自定义指令
全局自定义指令
Vue.directive(自定义指令名,{
  instreted(){
    <!--当绑定的指令的dom元素插入到dom中触发 -->
  }
})
局部自定义指令

#### 组件化开发
将页面分割成小零件 （组件） 将零件进行拼装
一样的可以复用

#### 组件
全局组件
局部组件