//alert(1)
// myButton.addEventListener('click',(e)=>{
//     let request = new XMLHttpRequest()
//     request.onreadystatechange=()=>{
//         //console.log(request.readyState)
//         if(request.readyState===4){
//             console.log('请求响应完毕')
//             //console.log(request.status)//返回0 //向百度页面发ajax请求。
//             if(request.status>=200 &&request.status<300 ){
//                 console.log('请求成功')
//                 console.log(request.status)
//                 console.log(request.statusText)
//                 console.log(request.getResponseHeader('Content-Type'))

//                 console.log(request.getAllResponseHeaders())
//                 // console.log(typeof request.responseText)
//                 // console.log(request.responseText)
//                 // let string = request.responseText
//                 // //把符合JSON语法的字符串 转换成 JS对象。
//                 // let object = window.JSON.parse(string)
//                 // console.log(typeof object)
//                 // console.log(object)



//             }else if(request.status>= 400){
//                 console.log('请求失败')
//             }
//         }
//     }
//     //只有 协议+端口+域名 一模一样才可以发ajax请求。
//     //不同的话 加一句：  respons.setHeader('Access-Control-Allow-Origin','http://frank.com:8001')
//     request.open('post','/xxx')//配置request
//     request.setRequestHeader('Content-Type','x-www-form-urlencoded')
//     request.send('文化啥地方吧')   
// })


// myButton.addEventListener('click',(e)=>{
//     let obj={
//         'url':'/xxx',
//         'method':'post',
//         'body':'a=1&b=2',
//        // 'successFn':successFn,
//         //'failFn':failFn,
//         'headers':{
//             'Content-Type':'x-www-form-urlencoded',
//             'andy':18
//         }
//     }
//     window.jQuery.ajax(obj).then(successFn,failFn)
// })


// window.jQuery=function(nodeOrSelector){
//     let nodes={}
//     nodes.addClass=function(){}
//     nodes.html=function(){}
//     return nodes
// }

// window.jQuery.ajax=function(options){
//     // let url
//     // if(arguments.length===1){
//     //     url=options.url
//     // }else if(arguments.length===2){
//     //     url=arguments[0]
//     //     options=arguments[1]
//     // }

//     // let method=options.method
//     // let body=options.body
//     // let successFn=options.successFn
//     // let failFn=options.failFn
//     // let headers=options.headers
    
//     return new Promise(function(resolve,reject){
//         //ES6 解构赋值
//         let {url,method,body,headers}=options 
//         let request=new XMLHttpRequest()
//         request.open(method,url)
//         for(let key in headers){
//             let value=headers[key]
//             request.setRequestHeader(key,value)
//         }
//         request.onreadystatechange=()=>{
//             //console.log(request.readyState)
//             if(request.readyState===4){
//                 if(request.status>=200 &&request.status<300 ){
//                     resolve.call(undefined,request.responseText)
//                 }else if(request.status>= 400){
//                     reject.call(undefined,request)
//                 }
//             }
//         }
//         request.send(body)
//     })
// }
// function successFn(e){
//     console.log('请求成功')
//     console.log(e)
// }
// function failFn(e){
//     console.log('请求失败')
//     console.log(e)
// }

// myButton.addEventListener('click',(e)=>{
//     $.ajax({
//         url:'/xxx',
//         method:'get'
//     })
//     .then(
//         (responseText)=>{ console.log(responseText);return '成功'},
//         (request)=>{ console.log('error1');return '失败'}
//     )
//     .then(
//         (上一次处理结果)=>{ console.log(上一次处理结果)},
//         (上一次处理结果)=>{ console.log(上一次处理结果)}
//     )
// })

//window.Promise(fn){
//    return {then:function}
//}

// myButton.addEventListener('click',()=>{
//     window.jQuery.ajax({
//       'url'    :'/xxx',
//       'method' :'post',
//       'headers':{'andy':18,
//                  'Content-Type':'x-www-form-urlencoded'},
//       'body':'a=1&b=2',
//       'successFn':successFn,
//       'failFn':failFn                   
//     })
//   })
//   window.jQuery.ajax=function(options){
//       //console.log(1);
//     let {url,method,headers,body,successFn,failFn} = options;
//     let xhr = new XMLHttpRequest()
//     xhr.open(method,url)
//     xhr.onreadystatechange=function(){
        
//       if(xhr.readyState===4){
//         console.log('请求完毕')
//         if(xhr.status>=200 && xhr.status<300){
//           console.log('请求成功')
//           successFn.call(undefined,xhr.responseText)
//         }else{
//           console.log('请求失败')
//           failFn.call(undefined,xhr)
//         }
//       }
//     } 
//     for(let key in headers){
//       let value = headers[key]
//       xhr.setRequestHeader(key,value)
//     }
//     xhr.send(body) 
//   }
//   function successFn(e){
//     console.log(e)
//   }
//   function failFn(){

//   }




  
myButton.addEventListener('click',()=>{
    window.jQuery.ajax({
      'url'    :'/xxx',
      'method' :'post',
      'headers':{'andy':18,
                 'Content-Type':'x-www-form-urlencoded'},
      'body':'a=1&b=2',
                       
    }).then(successFn,failFn);
  });
window.jQuery.ajax=function(options){
      //console.log(1);
   return new Promise(function(resolve,reject){
      let {url,method,headers,body,successFn,failFn} = options;
      let xhr = new XMLHttpRequest();
      xhr.open(method,url);
      xhr.onreadystatechange=function(){
        
          if(xhr.readyState===4){
              console.log('请求完毕');
              if(xhr.status>=200 && xhr.status<300){
                
                resolve.call(undefined,xhr.responseText);
              }else{
                
                reject.call(undefined,xhr);
              }
         }
      }; 
      for(let key in headers){
        let value = headers[key];
        xhr.setRequestHeader(key,value);
      }
      xhr.send(body); 
   
   });
};
   
  function successFn(e){
    console.log('请求成功');
    console.log(e);
  }
  function failFn(){
    console.log('请求失败');
  }
