const billamount=document.getElementById("billamount");
const tipamount=document.getElementById("percentageamount");
const resultlbl=document.getElementById("resultlbl");
function calculate(){
    let bill=Number(billamount.value);
    let tip=Number(tipamount.value);
    let total=bill+tip;
    resultlbl.innerHTML=`Total: <b>$${total}<b>`
}