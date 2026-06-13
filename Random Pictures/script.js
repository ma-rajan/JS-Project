const container=document.getElementById("container");
const loadcontent=document.getElementById("loadcontent");
loadcontent.addEventListener("click",e=>{
    for(let i=7;i<=23;i++){
        let img=document.createElement("img");
        img.src=`${i}.png`;
        img.style.width="37rem";
        img.style.margin="5px";
        container.appendChild(img);
    }
});