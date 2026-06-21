const num1=document.getElementById("num1");
const load=document.getElementById("load");
let i=0;
function loading(){
    i++;
    if(i<=100){
        num1.textContent=`${i}%`;
        load.style.width=`${i}%`;
        setTimeout(loading,50);
    }
}
loading();