const borders=document.getElementById("borders");
const num=document.getElementById("num");
let i=0;
function loading(){
    i++;
    if(i<=100){
        num.textContent=`${i}%`;
        let degree = i * 3.6; // 100% = 360deg
        borders.style.background = `conic-gradient(blue ${degree}deg, #ddd ${degree}deg)`;
        setTimeout(loading,20);
    }
}
loading();