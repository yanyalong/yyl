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
new Vue({
  el:''
  data:
  directives:{
    "自定义指令的名字":{
  }
})
#### 组件化开发
将页面分割成小零件 （组件） 将零件进行拼装
一样的可以复用

#### 组件
1.创建组件 vue.extend({配置项})
2.注册组件
3.使用组件  将组件名当成标签名使用
全局组件
Vue.componet('组件名',组件)
局部组件
注册到配置项里的components里
{
  el:'',
  components:{
    '组件名'：‘组件’
  }
}
组件的配置项
组件继承实例  实例有的组件基本都有 部分发生改变
组件里的绑定元素 template 
组件里的数据data 是一个函数返回一个对象

##### 组件通信 组件之间数据的相互传递
组件之间的数据传递与变化
亲兄弟    状态提升  找一个父组件 将数据放到父组件上  结合父子+子父
远亲兄弟   事件总线（eventbus） vuex
父子通信   props 传递一个数据 给子组件使用
子父通信   1.props将父组件的方法 传递给子组件调用 2.在子组件绑定一个自定义事件  由子组件通过$emit 触发



#### vue 脚手架工具
全局安装脚手架命令
npm install @vue/cli -g
安装结束  vue -V  出现版本号没问题
vue create 项目名字 
进入项目目录下
npm run serve 