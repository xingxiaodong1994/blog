let http=require("http"); //请求node自带的http模块，把它赋值给变量http
let url=require("url")

function start(route,handle){
    let onRequest=  (request,response)=>{
       let pathname=url.parse(request.url).pathname;
       console.log("请求路径是:"+pathname)
        // let postData='';
        // request.setEncoding("utf8");
        // request.addListener("data", function(postDataChunk) {
        //     postData += postDataChunk;
        //     console.log("开始传输数据"+
        //     postDataChunk + ".");
        //   });
        //   request.addListener("end", function() {
        //     console.log("传输数据完成");
        //     route(handle, pathname, response, request);
        //   });
          route(handle, pathname, response, request);
    }
    
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.");
    //我们创建了服务器，并且向创建它的方法传递了一个函数。
    //无论何时我们的服务器收到一个请求，这个函数就会被调用。
}

exports.start=start
