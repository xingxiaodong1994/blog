//取到第1234页对应的节点
var allButtons=$('#buttons>span');
var length=allButtons.length
//遍历节点添加样式和JS
for(let i=0;i<length;i++){
        //.eq()如果一个jQuery对象表示一个DOM元素的集合，
        //.eq()方法从集合的一个元素中构造新的jQuery对象。
        //所提供的索引标识这个集合中的元素的位置。
    allButtons.eq(i).on('click',(x)=>{
        //console.log(x.currentTarget) //第1234页
        //console.log(allButtons[i])
        let index=$(x.currentTarget).index();
        let p=index*-300;
        //console.log(index);
        // 如果不传递任何参数给 .index() 方法，
        // 则返回值就是jQuery对象中
        // 第一个元素相对于它同辈元素的位置。
        $('#images').css({
            transform:'translateX('+p+'px)'
        });
        $(x.currentTarget).addClass('red')
        .siblings('.red').removeClass('red');
    });
}
//自动播放banner，帮用户点击。

//自动播放banner，帮用户点击。
    let n=0;
    let timerId=setInterval(()=>{ 
        //console.log(n%allButtons.length)
        let size=n%length;
        //allButtons.eq(size).click();
        allButtons.eq(size).trigger('click');
        n += 1;
    },1000)
    

//当鼠标移动到图片上去，停止自动播放;
$('.window').on('mouseenter',()=>{
    clearInterval(timerId);
})
//当鼠标从图片上移开，回复自动播放;
$('.window').on('mouseleave',()=>{
    timerId=setInterval(()=>{ 
        //console.log(n%allButtons.length)
        let size=n%length;
        //allButtons.eq(size).click();
        allButtons.eq(size).trigger('click');
        n += 1;
    },1000)
})