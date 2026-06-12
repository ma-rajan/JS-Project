const textwrite=document.getElementById("textwrite");
const totalcharacter=document.getElementById("totalcharacter");
const maxcharacter=document.getElementById("maxcharacter");
let a=100;
textwrite.addEventListener("input",e=>{
    totalcharacter.textContent=textwrite.value.length;
    maxcharacter.textContent=a-textwrite.value.length;
});
