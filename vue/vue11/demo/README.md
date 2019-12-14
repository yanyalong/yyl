#### 路由守卫 路由导航 路由拦截器 
##### 全局前置守卫
所有的路由跳转之前 都被被全局前置守卫处理
router.beforeEach((to,from,next)=>{
  to 表示目标路由
  from 表示现在路由
  next 是否继续
  next('path') 直接跳转某一路径
})
登录态的检测 

##### 全局后置守卫
路由跳转完成后触发
aflerEach
##### 路由独享守卫 局部守卫  
beforeEnter((to,from,next)=>{
  只针对于某一个路由
})
##### 路由解析守卫
使用场景和使用方式与全局前置类似 区别在于执行的时机不一样

##### 组件内的守卫
1. beforeRouteEnter  内部没有this
2. befroreRouteUpdate  动态路由的组件动态路由改变的时候不用重新创建而是复用 获取参数
3. beforeRouteLeave   组件离开的时候执行 复用组件 之前的切换 不算离开

#### 插槽 slot 
1.正常情况下 组件标签内部的内容不会被解析
可在组件的内部放一个<slot></slot> 相当于在组件的内部占据一块空间 来存放组件标签里面的内容
具名插槽
给slot 起一个名字 只渲染相关的元素
<slot name='a'></slot>

<p>123123</p>
<span slot='a'>13131</span>
