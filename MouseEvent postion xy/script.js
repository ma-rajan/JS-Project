const x=document.getElementById("x");
const y=document.getElementById("y");

document.addEventListener("mousemove",e=>{
    x.textContent=e.clientX;
    y.textContent=e.clientY;
});