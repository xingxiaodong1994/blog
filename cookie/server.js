var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

var md5 = require('md5')

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}
let sessions={

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
    let string =fs.readFileSync('./index.html','utf8')
    
    // try{
    //   users=JSON.parse(users) //[]
    // }catch(exception){
    //   users=[]
    // }
    //console.log(request.headers.cookie)
    let cookies='';
    if(request.headers.cookie){
       cookies=request.headers.cookie.split(';')
      //[email=1204642219@qq.com,a=1,b=2]
    }
    hash={}
    let foundUser
    for(let i=0;i<cookies.length;i++){
      let parts=cookies[i].split('=')
      let key=parts[0]
      let value=parts[1]
      hash[key]=value
    }
    //console.log('hash')
    //console.log(hash)
    //console.log('sessions')
    //console.log(sessions)
    
    let mySession=sessions[hash.sessionId]
    let email
    if(mySession){
      email=mySession.sign_in_email
    }
    
    var users=fs.readFileSync('./db/users','utf8')
    users=JSON.parse(users)
    for(let i=0;i<users.length;i++){
      if(users[i].email===email){
        foundUser=users[i]
        break
      }
    }
    //console.log(foundUser)
    if(foundUser){
      string=string.replace('__password__', foundUser.password)
    }else{
      string=string.replace('__password__', '不知道')
    }



    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()


  }else if(path ==='/sign_up' && method==="GET"){
    let string = fs.readFileSync('./sign_up.html','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.write(string)
    response.end()

  }else if(path ==='/sign_up' && method==="POST"){
    readBody(request).then((body)=>{
      //console.log(body)
      let strings=body.split('&') //['email=1','password=2','password_confirmation=3']
      let hash={}
      strings.forEach((string)=>{
        //string=='email=1'
        let parts=string.split('=') //['email','1']
        let key=parts[0]
        let value=parts[1]
        hash[key]=decodeURIComponent(value) //hash{"email":@}@符号被变成了40%
      })
      //console.log(hash)
      //console.log(1)
      let {email,password,password_confirmation}=hash
      if(email.indexOf('@')===-1){ 
        response.statusCode = 400
        response.setHeader('Content-Type','application/json;charset=utf-8')
        response.write(`{
          "errors":{"email":"invalid"}
        }`)
      }else if(password !== password_confirmation){
        response.statusCode = 400
        response.write('password not match')
      }else{
        var users=fs.readFileSync('./db/users','utf8')
        try{
          users=JSON.parse(users) //[]
        }catch(exception){
          users=[]
        }
        let inUse=false
        for(let i=0;i<users.length;i++){
          let user=users[i]
           if(user.email===email){
             inUse=true
             break;
           }
        }
        if(inUse){
          response.statusCode = 400
          response.write('email in use')
        }else{
          users.push({email:email,password:password})
          var usersString=JSON.stringify(users)
          fs.writeFileSync('./db/users',usersString)    
          response.statusCode = 200
        }  
      }
      response.end()
    })

  }else if(path ==='/sign_in' && method==='GET'){
    let string = fs.readFileSync('./sign_in.html','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path ==='/sign_in' && method==='POST'){
    readBody(request).then((body)=>{
      //console.log(body)
      let strings=body.split('&') //['email=1','password=2','password_confirmation=3']
      let hash={}
      strings.forEach((string)=>{
        //string=='email=1'
        let parts=string.split('=') //['email','1']
        let key=parts[0]
        let value=parts[1]
        hash[key]=decodeURIComponent(value) //hash{"email":@}@符号被变成了40%
      })
      //console.log(hash)
      let {email,password}=hash 
      //console.log("email,password")
      //console.log(email)
      //console.log(password)
      var users=fs.readFileSync('./db/users','utf8')
        try{
          users=JSON.parse(users) //[]
        }catch(exception){
          users=[]
        }
      //console.log(users)
      let found
      for(let i=0;i<users.length;i++){
        if(users[i].email===email && users[i].password===password){
          found=true
          break
        }
      }
      //console.log(found)
      if(found){
        //console.log(1)
        let sessionId= Math.random()*100000
       // console.log(sessionId)
        sessions[sessionId]={sign_in_email: email}
        //console.log('sessions-sign-in')
        //console.log(sessions)
              //Set-Cookie:<cookie-name>=<cookie-value>
        response.setHeader('Set-Cookie',`sessionId=${sessionId}`)
        //response.setHeader('Set-Cookie',`sign_in_email=${email}`)
        response.statusCode=200
      }else{
        //console.log(2)
        response.statusCode=401
      }
      response.end()
    })
  }else if(path==='/css/main.css'){
    let string = fs.readFileSync('./css/main.css','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/css;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path==='/js/main.js'){
    let string = fs.readFileSync('./js/main.js','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/javascript;charset=utf-8')
    let fileMd5 = md5(string)
    response.setHeader('Etag',fileMd5)
    //console.log(request.headers)
    if(request.headers['if-none-match']===fileMd5){
      //没有响应体
      response.statusCode=304
    }else{
      response.write(string)
    }
      //response.setHeader('Cache-Control','max-age=30')
      //response.setHeader('Expires','Sun, 04 Feb 2019 14:38:05 GM')
    response.end()
  }else if(path ==='/jquery3.3.1.js'){
    let string = fs.readFileSync('./jquery3.3.1.js','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/javascript;charset=utf-8')
    response.write(string)
    response.end()
  } else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('呜呜呜')
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




