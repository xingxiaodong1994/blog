
/*设置画板宽高*/
var yyy=document.getElementById('xxx');
var context=yyy.getContext('2d');
autoSetCanvasSize(yyy)

/*******/
listenToMouse(yyy)

/*******/
var eraserEnabled=false
eraser.onclick=function(){ 
    eraserEnabled=true
    actions.className='actions x'
}
brush.onclick=function(){ 
    eraserEnabled=false
    actions.className='actions'
}


/*******/


function listenToMouse(canvas){     
    var lastPoint={x:undefined,y:undefined}
    var using=false
    canvas.onmousedown=function(aaa){
         var x=aaa.clientX;//相对于视口位置！！！
         var y=aaa.clientY;
         using=true
         if(eraserEnabled){   
             context.clearRect(x-5,y-5,10,10)
         }else{
             lastPoint={'x':x,'y':y}
             // console.log(lastPoint)
             // drawCircle(x,y,1)
         }    
    }
    canvas.onmousemove=function(aaa){    
        var x=aaa.clientX;//相对于视口位置！！！
        var y=aaa.clientY;
        if(!using){return}
            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10)
            }else{ 
                var newPoint={'x':x,'y':y}
               // drawCircle(x,y,1)
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
                lastPoint=newPoint;
            }           
    }
    canvas.onmouseup=function(aaa){ using=false;}              
}        
function drawCircle(x,y,radius){
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2)
    //context.stroke()
    context.fillStyle='black';
    context.fill()
}
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);//起点
    context.lineWidth=5
    context.lineTo(x2,y2);//终点
    context.strokeStyle='black'
    context.stroke();
    context.closePath();
}  
function autoSetCanvasSize(canvas){
     //设置canvas宽高 
     pageWidthHeight(); 
     window.onresize=function(){pageWidthHeight();}
     function pageWidthHeight(){
         var pageWidth=document.documentElement.clientWidth;
         var pageHeight=document.documentElement.clientHeight;
         canvas.width=pageWidth;
         canvas.height=pageHeight;
     }
     // //描边 
     // context.strokeStyle='yellow';
     // context.strokeRect(10,10,100,100);//rectangle
     // //填充
     // context.fillStyle='blue';
     // context.fillRect(10,10,100,100);//rectangle
     // //橡皮擦
     // //context.clearRect(50,50,10,10);
     // context.fillStyle='red';
     // context.beginPath();
     // context.moveTo(240,240)
     // context.lineTo(300,240)
     // context.lineTo(300,300)
     // context.fill()
}



