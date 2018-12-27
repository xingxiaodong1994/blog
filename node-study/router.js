function route(handle,pathname,response,request){
    console.log("关于请求路径"+pathname+"的一个路由");
    if(typeof handle[pathname]==="function"){
        return handle[pathname](response,request);
    }else{
        console.log("路径"+pathname+"没有处理程序");
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write('404 Not found :)');
        response.end();
    }
   
}
exports.route=route;