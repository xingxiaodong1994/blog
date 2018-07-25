let $slide=$('.window .images');
let $images=$('.window .images>img');
let $buttons=$('.buttons>button');
let current=0;

makeFakeSlide();

$slide.css({transform:'translateX(-920px)'});  

bindEvents()


$(next).on('click',function(){
    goToSlide(current+1)
})
$(previous).on('click',function(){
    goToSlide(current-1)
})

let timer=setInterval(function(){
    goToSlide(current+1)
},2000)
$('.window').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer=setInterval(function(){
        goToSlide(current+1)
    },2000)
})


function bindEvents(){
    $('.buttons').on('click','button',function(e){
        let $button=$(e.currentTarget);
        let index=$button.index();
        goToSlide(index)
       
    })
}

function goToSlide(index){
    if(index>$buttons.length-1){index=0;}
    if(index<0){index=$buttons.length-1;}
   // console.log('current, index')
    //console.log(current, index)
    if(current===$buttons.length-1 && index===0){
        // console.log(1)
         $slide.css({ transform:`translateX(${-920*($buttons.length-1+2)}px)`})
        .one('transitionend',function(){
            $slide.hide().offset();
            $slide.css({ transform:`translateX(${-920*(index+1)}px)`}).show()
        })
     }else if(current===0 && index===$buttons.length-1){
        //console.log(2)
        $slide.css({transform:`translateX(${-920*(0)}px)`})
        .one('transitionend',function(){
            $slide.hide().offset();
            $slide.css({ transform:`translateX(${-920*(index+1)}px)`}).show()
        })
     }else {
        //console.log(3)
        $slide.css({ transform:`translateX(${-920*(index+1)}px)`})
    }
    current=index; 
}

function makeFakeSlide(){
    let $firstCopy=$images.eq(0).clone(true)
    //console.log($firstCopy[0])
    let $lastCopy=$images.eq($images.length-1).clone(true)
    //console.log($lastCopy[0])
    $slide.append($firstCopy)
    $slide.prepend($lastCopy)
    
}





    // $buttons.eq(0).on('click',function(){
    //     console.log('current'+current);
    //     if(current===3){
    //         $slide.css({transform:`translateX(${-920*(3+1+1)}px)`})
    //         .one('transitionend',function(){
    //             $slide.hide().offset();
    //             $slide.css({ transform:`translateX(${-920*1}px)`}).show()
    //         })
    //        console.log(999)
    //     }else{
    //         $slide.css({
    //             transform:`translateX(${-920*(0+1)}px)`
    //         })     
    //     }
    //     current=0;
    //     console.log(current);
      
    // })
    // $buttons.eq(1).on('click',function(){
    //     console.log('current'+current);
    //     $slide.css({
    //         transform:`translateX(${-920*(1+1)}px)`
    //     })
    //     current=1;
    //     console.log(current);
    // })
    // $buttons.eq(2).on('click',function(){
    //     console.log('current'+current);
    //     $slide.css({
    //         transform:`translateX(${-920*(2+1)}px)`
    //     })
    //     current=2;
    //     console.log(current);
    // })
    // $buttons.eq(3).on('click',function(){
    //     console.log('current'+current);
    
    //     if(current===0){
    //         $slide.css({transform:`translateX(${-920*(0)}px)`})
    //         .one('transitionend',function(){
    //             $slide.hide().offset();
    //             $slide.css({ transform:`translateX(${-920*(3+1)}px)`}).show()
    //         })
    //         console.log(888)
    //     }else{
    //         $slide.css({
    //             transform:`translateX(${-920*(3+1)}px)`
    //         })   
    //     }
    //     current=3;
    //     console.log(current);
    // })
