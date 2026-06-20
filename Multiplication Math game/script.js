const score=document.getElementById("score");
const questions=document.getElementById("questions");
const inputbox=document.getElementById("inputbox");
const check=document.getElementById("check");
 let i=0;
 let rand1,rand2;
        function quest(){
     rand1=Math.floor(Math.random()*10)+1;
     rand2=Math.floor(Math.random()*30)+1;
    questions.textContent=`What is ${rand1} multiply by ${rand2}?`;
    }
    quest();
    check.addEventListener("click",e=>{
    let result=rand1*rand2;
    let num=Number(inputbox.value);
    if(result==num){
        i++;
       
    }else{
        i--;
    }
       score.textContent=`score:${i}`;
       inputbox.value="";
       quest();
});
