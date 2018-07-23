// 初始化
$('.images > img:nth-child(1)').addClass('current');
$('.images > img:nth-child(2)').addClass('enter');
$('.images > img:nth-child(3)').addClass('leave');
//循环
// setInterval(()=>{
//         if($('#images1')[0].className=='current'){$('#images1').removeClass('current').addClass('leave1')}
//         if($('#images1')[0].className=='enter')  {$('#images1').removeClass('enter').addClass('current')}
//         if($('#images1')[0].className=='leave')  {$('#images1').removeClass('leave').addClass('enter')}
//         if($('#images1')[0].className=='leave1') {$('#images1').removeClass('leave1').addClass('leave')}
//         if($('#images2')[0].className=='current'){$('#images2').removeClass('current').addClass('leave1')}
//         if($('#images2')[0].className=='enter')  {$('#images2').removeClass('enter').addClass('current')}
//         if($('#images2')[0].className=='leave')  {$('#images2').removeClass('leave').addClass('enter')}
//         if($('#images2')[0].className=='leave1') {$('#images2').removeClass('leave1').addClass('leave')}
//         if($('#images3')[0].className=='current'){$('#images3').removeClass('current').addClass('leave1')}
//         if($('#images3')[0].className=='enter')  {$('#images3').removeClass('enter').addClass('current')}
//         if($('#images3')[0].className=='leave')  {$('#images3').removeClass('leave').addClass('enter')}
//         if($('#images3')[0].className=='leave1') {$('#images3').removeClass('leave1').addClass('leave')}
// },3000)
 



function change(node){
    if(node[0].className=='current'){node.removeClass('current').addClass('leave1')}
    if(node[0].className=='enter')  {node.removeClass('enter').addClass('current')}
    if(node[0].className=='leave')  {node.removeClass('leave').addClass('enter')}
    if(node[0].className=='leave1')  {node.removeClass('leave1').addClass('leave')}
}
setInterval(()=>{
    
    for(let n=0;n<3;n++)
   {
    change($('#images'+(n%3+1)));
   } 
   
},3000)







































//     setTimeout(()=>{
//        $('.images > img:nth-child(3)').addClass('current')
//        .removeClass('enter')
//        $('.images > img:nth-child(1)').addClass('enter')
//        .removeClass('leave')
//        $('.images > img:nth-child(2)').addClass('leave')
//        .removeClass('current')  
//    },6000)
//    setTimeout(()=>{
//        $('.images > img:nth-child(1)').addClass('current')
//        .removeClass('enter')
//        $('.images > img:nth-child(2)').addClass('enter')
//        .removeClass('leave')
//        $('.images > img:nth-child(3)').addClass('leave')
//        .removeClass('current')  
//    },9000)


