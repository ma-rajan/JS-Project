const content=document.getElementsByClassName("content");
const first=document.querySelector("#first");
const second=document.getElementById("second");
const third=document.getElementById("third");
const forth=document.getElementById("forth");
const fifth=document.getElementById("fifth");
let arr=[first,second,third,forth,fifth];
first.style.backgroundColor="yellow";
let c=0;
function next(){
    if(c<arr.length-1){
    c++;
    arr[c].style.backgroundColor="yellow";
}
}
function previous(){
    if(c>=0){
        arr[c].style.backgroundColor="white";
            c--;
    }
}