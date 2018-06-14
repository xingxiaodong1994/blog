#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
if (fs.existsSync(dirName)) {
    console.log('error: dir exists');  
    


} else {
fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js
fs.writeFileSync("./index.html", "<!DOCTYPE>")
fs.writeFileSync("./index.html", "<title>Hello</title>")
fs.writeFileSync("./index.html", "<h1>Hi</h1>")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = 'Hello World'")
fs.writeFileSync("./js/main.js", "alert(string)")

}



