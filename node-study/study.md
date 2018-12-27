书籍《node入门》网址 https://www.nodebeginner.org/index-zh-cn.html#handling-file-uploads

1. 依赖注入：所以模块通过依赖注入的形式绑定在一起，别硬编码，直接绑定模块！
2. require语法：
   ```js
   //引用
   let xx=require("./xx")
   xx.f1()//调用xx模块的f1方法
   //输出
   let f1=()=>{console.log("函数f1运行了")}
   exports.f1=f1
   ```
3. 阻塞与非阻塞：
   对于请求计时器这些异步操作使用promise,或者发布订阅模式，防止阻塞。
4. 使用form表单的提交按钮submit提交时时，input元素要有name字段，否则input中内容无法提交。
5. npm install formidable//处理文件上传用到的node模块