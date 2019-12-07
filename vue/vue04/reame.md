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

#### 过滤器 
全局过滤器
Vue.filter('name',(data,[params])=>{ return 过滤后的数据}) 
局部过滤器
new Vue（{
  filters:{
    name:()=>{}
  }
}）
{{name|filtername()}}
#### computed 
new Vue({
  computed:{
    age(){
      <!-- 可以和数据进行关联 -->
      return this.age*3+3
    }
  }
})
计算属性的缓存性 关联数据变化引起重新计算 无关数据变化不会引起重新计算
#### watch 监听
监听数据的改变
new Vue({
  watch:{
    要监听的数据:(newValue,oldVaue)=>{
        dom 元素全是更改之前的
    }
  }
})

#### 生命周期
11 钩子函数总数  84个阶段每个2个钩子  2 和缓存相关的钩子  1 捕获错误
常用的 
ceated  数据请求
mounted dom初始化
beforeDestory  擦屁股的操作 弥补遗憾

#### vue 脚手架工具
全局安装脚手架命令
npm install @vue/cli -g
安装结束  vue -V  出现版本号没问题
vue create 项目名字 
进入项目目录下
npm run serve 

#### 单文件组件（一个文件就是一个组件）
模板 html
js
样式


#### spa(单页面yy) mpa（多页面应用） 

100功能  mpa  100页面  10k           首页 10k  其他每个页面 10k
        spa   1 个页面 +100个组件     首页 1m   其他组件  0

spa 组件的切换
  组件开发  组件复用开发快
  页面切换流畅
  首页加载过慢
  seo优化差
mpa 页面的切换
  页面切换不太流畅
  首页加载尚可 
  seo优化ok
seo 优化 搜索引擎优化  电商   
<meta keyword='王者荣耀 庆余年 淘宝  京东 lol .....'>

#### 项目目录
npm run serve 本地启动项目 开发环境
npm run build  编译打包   线上环境
public 公用资源目录  以及入口的html文件
src    源码目录
  main.js   js 的入口文件
  App.vue  根组件
  assets  可以放各种资源
  compontents 其他组件
dist
  编译打包后的文件目录
  文件不能直接打开  引入资源用的是绝对路径 换成相对路径
  xxx.map  可以删除进一步降低体积大小

#### 动态组件
可以在标签上通过 is 指定一个组件名  会渲染该组件
为了语义化提供一个新的标签 component
<div is='singer'></div>
<component is='singer'></component>

#### 路由
根据地址栏的改变 渲染不同的组件

1.控制地址栏的改变
  <router-link></router-link>
  to 属性控制地址栏改变
  tag 属性控制渲染的元素
  active-class 添加活跃状态的类名
2.
  在页面开启一片空间 渲染不同的组件
  <router-view></router-view>

##### 路由的基本使用
1. 安装路由
    npm install vue-router
2. 配置路由表
    1.引入vue 
    2.引入路由
    3.使用路由
    4.创建路由对象
    5.抛出路由对象
    6.配置路由  地址栏路径和组件的联系
3. 注册路由
   实例里注册路由
4. 使用新增的2个标签

##### 路由模式
hash  有#
history 没有# 
打包上线之后  刷新页面404 需要后端做服务器配置
##### 命名路由
给路由通过name属性起一个名字 
切换的时候通过name 进行切换
##### 命名视图 
给router-view 起一个名字 
让不同的router-view 渲染不同的组件