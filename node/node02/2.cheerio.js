//cheerio 分析一个网页文件 并且 将网页文件转化为类似jq的结构

const cheerio = require('cheerio')
const $ = cheerio.load('<div class="test"> <h1>123123</h1>sdfsdfsdf</div>')
 
console.log($('.test h1').html())