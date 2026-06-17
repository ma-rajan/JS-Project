const cycle=document.getElementById("cycle");
const running=document.getElementById("running");
const snowborad=document.getElementById("snowborad");

for(let i=0;i<=40;i++){
    setTimeout(()=>{
        cycle.textContent=`${i}`;
    },i*30);
}


for(let i=0;i<=15;i++){
    setTimeout(()=>{
        running.textContent=`${i}`;
    },i*50);
}


for(let i=0;i<=100;i++){
    setTimeout(()=>{
        snowborad.textContent=`${i}`;
    },i*10);
}