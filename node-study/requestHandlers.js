var querystring = require("querystring");
var fs=require("fs")
var formidable=require("formidable")

function start(response, request) {
      console.log("请求路径'/start'被处理")
        let body=
        `<html>
        <head>
            <title>首页</title>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        </head>
        <body>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <lable>上传图片
                    <input  name="picture"  type="file">
                </lable>
                <input type="submit"   value="提交"/>
            </form>
        </body>
        </html>`;
     response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
     response.write(body);
     response.end();
}

function upload(response,request){
    console.log("请求路径'/upload'被处理")
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
      console.log("parsing done");

      fs.renameSync(files.picture.path, "./image/1.jpg");
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("received image:<br/>");
      response.write("<img src='/show' />");
      response.end();
    });
}
function show(response,request){
    console.log("请求路径'/show'被处理")
    fs.readFile("./image/1.jpg","binary",function(error,file){
        if(error){
            response.writeHead(500,{"Content-Type":"text/plain;charset=UTF-8"});
            response.write(error + "\n");
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"image/png;charset=UTF-8"});
            response.write(file, "binary");
            response.end();
        }
    })
}
exports.start=start;
exports.upload=upload;
exports.show=show;



