const dobenter=document.getElementById("dobenter");
const result=document.getElementById("result");
function calculate(){
   let dob=new Date(dobenter.value);
   if(!dobenter.value){
    result.textContent="Please Enter Date Of Birth";
    return;
   }
   let today=new Date();
   let age;
   age=today.getFullYear()-dob.getFullYear();
   let monthdiff=today.getMonth()-dob.getMonth();
    if( monthdiff < 0 ||(monthdiff === 0 && today.getDate()<dob.getDate())){        
        age--;
    }
  result.textContent=`Age : ${age}`;
}