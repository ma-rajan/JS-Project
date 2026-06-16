const firstdown=document.getElementById("firstdown");
const seconddown=document.getElementById("seconddown");
const thirddown=document.getElementById("thirddown");
const text=document.getElementById("text");
let down=true;
firstdown.addEventListener("click",e=>{
    if(down){
     text.style.display = "none";
    firstdown.src=`image/arrow-up.png`;
    
   }else{
    text.style.display = "block";
    firstdown.src=`image/down-arrow.png`;
   }
   down=!down;
});

seconddown.addEventListener("click",e=>{
    if(down){
    text.style.display = "none";
    seconddown.src=`image/arrow-up.png`;
   }else{
    seconddown.src=`image/down-arrow.png`;
    text.style.display = "block";
   }
   down=!down;
});

thirddown.addEventListener("click",e=>{
  if(down){
    text.style.display = "none";
    thirddown.src=`image/arrow-up.png`;
   }else{
    thirddown.src=`image/down-arrow.png`;
    text.style.display = "block";
   }
   down=!down;
});