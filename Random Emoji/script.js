const emoji=document.getElementById("emoji");
const generator=document.getElementById("generator");
generator.addEventListener("click",e=>{
    let rand=Math.floor(Math.random()*16)+1;
    emoji.src=`image/${rand}.png`;
});