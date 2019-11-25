const Url = require('url')
// let url='http://www.baodu.com:3000/hehe/xixi?us=123&ps=456#heihei'
// let obj=Url.parse(url)
// url.parse 将url字符串变成url对象
// console.log(obj)

let obj={
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baodu.com:3000',
  port: '3000',
  hostname: 'www.baodu.com',
  hash: '#heihei',
  search: '?us=123&ps=456',
  query: 'us=123&ps=456',
  pathname: '/hehe/xixi',
  path: '/hehe/xixi?us=123&ps=456',
  href: 'http://www.baodu.com:3000/hehe/xixi?us=123&ps=456#heihei' }
  console.log(Url.format(obj))
  // format 将url对象变成url对象