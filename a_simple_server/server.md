# 一个简易服务器
## 1、将此文件夹下载到你的桌面
## 2、然后进入用Git 进入此文件夹，
## 3、运行命令$ node server.js 8888
## 4、在浏览器输入网址"http://localhost:8888"进行访问
## 5、你会发现它满足一下功能

###用户请求 / 时，返回 html 内容
###该 html 内容里面由一个 css link 和一个 script
###css link 会请求 /style.css，返回 css 内容
###script 会请求 /main.js，返回 js 内容
###请求 / /style.css /main.js 以外的路径，则一律返回 404 状态码