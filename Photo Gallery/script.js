const enternum=document.getElementById("enternum");
const getimages=document.getElementById("getimages");
const images=document.getElementById("images");


getimages.addEventListener("click",e=>{
    let num=Number(enternum.value);  
    images.innerHTML="";  
    if(num>0 && num<=14){
        for(let i=1;i<=num;i++){
             let img = document.createElement("img");
            img.src = `/image/${i}.jpg`;
            img.width = 250;
            img.height=250;
            img.style.margin="10px";
            img.style.borderRadius="50%";
            images.appendChild(img);
        }
    }else{
        images.textContent="Sorry there is only 14 image avialble";
    }
});







