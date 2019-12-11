### 全局状态（变量）管理

#### 使用场景
1.多组件共享状态 （有一个数据好多组件都要用）
2.任何一个组件修改后其他组件都要改变
3.实现组件通信

#### 基本使用
1.获取全局状态值
this.$store.state.xxxx
2.修改全局状态值 
  a. 同步 必须通过mutation里的方法
  b. 异步 先action  ->mutation 

1 安装模块
2.和路由创建vuex 文件
3.抛出store对象
4.在main.js注册

#### store对象的核心配置
1.state 
全局状态
2.mutations
主要用来修改state值
3.actions
vuex中出现了异步 异步应该放到actions里去 非必须
1.可以将异步代码封装
2.帮助我们统一管理异步
3.时间旅行
4.getters 派生属性
vuex中的计算属性
he state里的数据关联 state数据改变getter也会执行
1.简化代码
2.获取state前进行处理 

#### 进阶版  懒人福利
mapState mapGetters mapActions  mapMutations
值类型
state
getters
通过辅助函数将 值映射到组件内部的计算属性里
函数类型
通过辅助函数将 函数映射到组件内部的方法里
actions
mutations

