oBtn=document.getElementById('btn');
oWrapper=document.getElementById('wrapper');
oFloat=document.getElementById('float1');
oWrapper.addEventListener('click',function(e){
    //console.log(1);
    e.stopPropagation()   
});
oBtn.addEventListener('click',function(e){
    e.stopPropagation()
    if( oFloat.className==='float1'){
        //console.log(2);
        oFloat.classList.add('active');    
    }else{
        //console.log(3);
        oFloat.classList.remove('active');
    } 
});
document.addEventListener('click',function(){
    //console.log(4);
    oFloat.classList.remove('active');
});