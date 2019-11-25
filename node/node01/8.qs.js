//  us=123&ps=456   split
// {us:123,ps:456}
let qs = require('querystring')
// let string='us=123&ps=456'
// let obj=qs.parse(string,'&',"=")
let string='us%123$ps%456'
let obj=qs.parse(string,'$',"%")
// let obj={ us: '123', ps: '456' }
// let string = qs.stringify(obj)
console.log(obj)
// console.log(string)