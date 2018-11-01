var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]


if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}
var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('方方说：含查询字符串的路径\n' + pathWithQuery)
  
  if(path === '/'){
    //读取文件
    let string = fs.readFileSync('./index.html','utf8')
    //响应客户端
      //1.响应第一部分：状态码
      response.statusCode=200
      //2.响应的第二部分：响应头
      response.setHeader('Content-Type','text/html;charset=utf-8;')
      //3.响应第四部分：响应体
      response.write(string)
    //响应结束
    response.end()
  }else if(path === '/books/1'){
     let string = fs.readFileSync('./books/1','utf8')
     response.statusCode=200
     response.setHeader('Content-Type','text/json;charset=utf-8;')
     response.write(string)
     response.end()
  }else{
    let string='请求失败'
    response.statusCode=404
    response.setHeader('Conent-Type','text/html;charset=utf-8')
    response.write(string)
    response.end()
  }
   
   






  /******** 代码结束，下面不要看 ************/
})

function readBody(request){
  return new Promise((resolve,reject)=>{
    let body=[]
    request.on('data',(chunk)=>{
      body.push(chunk);
    }).on('end',()=>{
      body=Buffer.concat(body).toString()
      resolve(body)
    })
  })
}

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)




