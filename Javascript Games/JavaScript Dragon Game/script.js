document.onkeydown=function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=> {
            dino.classList.remove('animatedino');
        },700);
    }
}