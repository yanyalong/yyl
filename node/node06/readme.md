### node 运行方式
1.编辑器 
2.命令行工具 win+r  输入 cmd 

cd  文件夹路径  进入文件
cd  ..     
cd  ./
dir 查看当前文件的路径信息

### node
node 
npm 

### 
人生疑问  what  why  how
宋老师3步法 问题拆分法

### 为什么学习 node  -> 为什么学习一门知识
1.找工作 需要
2.业务逻辑 对业务有更深入的理解
3.防止甩锅
### 什么是node 
node 平台(platform) 运行环境(runtime)
### 语言的能力取决于什么 

javascript
变量 函数 for  运算....
dom
bom
ajax 
不能操作数据库

node.js js
变量 函数 for  运算....
操作本地文件
操作数据库 
....
不能 dom  bom

决定语言能力的不是语言本身而是语言运行的环境平台
node == 浏览器  运行环境

### nodejs  高并发处理  python
1.非阻塞io 正常的语言中 i（input）/o(output)(网络请求 操作本地文件操作数据库 ..)操作大多数都是阻塞的
2.事件驱动

### node的前世今生


### how 学习node
1.了解node的基础知识
2.能通过node自己写api接口

### 模块化开发  （将功能封装成为一个模块）（commonjs规范）
1.封装一个模块 并且导出
  一个js文件是一个模块 通过 module.exports = xx 导出模块
2.引入一个模块
  require('') 引入一个模块
3.使用一个模块
### 模块分类
1. 内置模块 node自带的 不需要下载
2. 第三方模块 别人写的模块 需要通过npm 下载
3. 自定义模块 自己写的模块

### node的内置模块 

#### 文件操作  curd 
文件夹的删除 读取 
文件的创建删除 读取 修改


### 捕获错误的方式
1.同步代码  try catch 
2.异步    错误的回调优先

### 邮箱轰炸器
1.能够发邮件   发送邮件的第三方模块  nodemailer  npm
2.一直发 
### 邮箱验证码注册 
分析邮箱注册的实现流程

### seo 优化  搜索殷勤优化
爬虫系统 
卖零食 www.hehe.com 
<meta keyword='lol  王者 周杰伦 ... '>

### 爬虫系统  request  cheerio
1. 爬取一个网站的内容信息 
2. 分析内容
3. 储存数据  下载图片

### 框架 koa  express
api文档
api接口 1.ajax 请求  2.模块下的方法 也可以叫api

接口4要素
url      请求路径
method   方法  get/post
params   请求参数  
response 返回信息

ajax 
前端 
1.通过ajax 向后端传递数据
2.等待返回数据 
3.处理数据
后端
1.接受前端传递的数据
2.对数据做处理
3.将数据处理的结果返回给前端

### 获取前端数据
get  req.query
post req.body
     1.需要插件 第三方模块  body-parser 
     2.数据格式 json  x-www-form-urlencode

### 静态资源路径  www目录
指定一个路径 该路径的所有文件都可以通过网络的方式来访问

app.use('访问的url路径',express.static('指定的文件夹路径'))

### 中间件 拦截器
中间件就是一个函数 接受三个参数 req res next
(req,res,next)=>{} 

### 跨域问题
1.同源策略 浏览器为了安全性考虑   
jsonp  需要后端配合
cors   需要后端配合
服务器代理  服务器请求没有跨域问题
1.我方网页请求 我方服务器  
2.我方服务器请求敌方服务器
3.将敌方服务器返回的数据给我方网页

### 路由
/user/login
/user/reg
        /login
/user{
        /reg


### 文件存储


### 数据库存储
关系型数据库  mysql
非关系型数据库 mongodb nosql  ...

mongodb  非关系型数据库(文档型数据库) 类json 结构

名词解析  
mongodb 数据库名
mongod  命令行 终端 cmd  小黑框  一个命令  启动数据库 
mongo   命令行 终端 cmd  小黑框  一个命令  在命令行连接数据库 可以操作数据库
mongoose 第三方模块 node 操作数据库的模块
#### mongodb 安装错误
1. 双击安装 注意2个对号取消 install  compass 
2. 运行指令mongod  mongod 不是一个内部命令   环境变量的问题
3. 找到mongdb安装目录 配置环境变量  我的电脑 ->属性->高级设置->环境变量->系统变量->path  英文的';'分割
4. 缺少文件目录  在c盘 添加一个data的文件夹 data里添加一个db的文件夹
5. 运行mongod 启动数据库
6. mongo 连接数据库   show dbs 查看当前所有的数据库

#### 命令行使用mongodb
mongod  mongo
mysql   database db   table               data 
mongodb databse  db   collection（集合）   document（文档）json 

##### 数据库 curd
show dbs  显示所有的数据库
db        当前正在使用的数据库
use dbname 
         1.创建一个新的数据库  数据库没有内容 所有临时库 看不到
         2.选择一个已经创建的数据库
db.dropDatabase()  删除数据库
###### 集合 （collections） 数据表 
show collections 查看当前数据库所有的集合
db.createCollection('集合名字')
db.集合的名字.drop()
###### 文档 数据 
_id 主键 唯一索引
db.集合名.insert(obj) 
db.集合名.find()
db.集合名.find().pretty()
db.集合名.remove(删除条件)
db.集合名.update({key:value} 查询条件，{}更新数据) 
db.集合名.update({key:value},{$set:{us:'网易'}},{multi:true})
db.集合名.save({})
通过save 方法添加数据 如果主键重复 覆盖相当于 修改 不重复就是创建

##### 固值查询
查询的字段给与一个固定的值
##### 范值查询
$gt  >
$gte >=
$lt  <
$lte <=
$ne  !=
db.user.find({age:{$gte:19}})
##### 交集查询&&   并集查询||
查询 年龄大于16 或者年龄小于18
db.user.find({$or:[条件1，条件2]})
查询 年龄大于16 并且年龄小于18
db.user.find({$and:[条件1，条件2]})
##### 分页
skip(num) 跳过多少条
limit(num) 限制多少条
pageSize 每页多少条
page  第几页
db.user.find().skip(0).limit(3)
db.user.find().skip(3).limit(3)
db.user.find().skip((page-1)*pageSize).limit(pageSize)

#### 在nodejs中使用mongodb数据库
mongoose 的第三方模块
1. 连接数据库
2. 创建schema对象
3. 将schema对象和集合做关联形成数据模型
4. 数据库操作

####  注册登录
基本功能 ：
注册：用户输入us ps 通过请求存入数据库
登录：用户输入us ps 查看数据库有没有对应的数据
衍生功能：
验证码注册 
   1.先发送手机或者邮箱的验证码 服务器保存 邮箱和验证码
   2.用户在注册的时候携带验证码
   3.服务器验证 邮箱和验证码是否一致
x天免登录
jwt
单点登录
多点登录


#### 目录结构

server.js  入口文件
router  路由信息
db      数据库相关
  connect  数据库连接
  model    schema数据模型
contorl    控制器
public     静态资源

#### 文件上传
1.base64
2.文件

##### 文件  multer
1.前端
  a.选中图片
  b.通过ajax上传
  c.显示缩略图
2.后端
  a.接受文件数据
  b.处理数据
  c.返回数据 
  上传一个图片 这个图片要在网络环境访问

注意 ：
文件上传  method 必须post
数据格式必须是formdata 

#### api接口文档生成
通过 apidoc 这个模块  读取某一目录下所有的规则注释 形成api文档

1. npm install  apidoc  -g 
2. 按照规范写注释
3. 在 package.json同一级创建 apidoc.josn 文件
4. 执行 apidoc  -i 读取目录  -o  输出目录

#### jwt 鉴权
1.用户登录成功 后端产生1个加密token 返回给前端 
2.前端在调用接口的时候 需要携带token
3.后端在调用数据库之前 先验证token 的合法性

问题1  单点登录
用户登录过一次之后token 变成万能钥匙
将用户和token 绑定
1.用户登录成功产生token 将token 和数据库里的用户做关联 
2.前端在调用接口的时候 需要携带token
3.后端在调用数据库之前 先验证token 的合法性 在验证token和用户是否匹配
问题2 多点登录
在数据库里存多个token
问题3  7天免登录
登录过之后 7天之内不用登录 token 的有效时间 7天 
前端超时处理都是假的
服务器来做
记录token的创建时间  
使用的时候用当前时间 - 创建时间

-999 token  非法 用户伪造token
-998 token缺失   用户没有携带token
-997 token失效   token被顶替刷新
-996 token 超时  token超过有效期



