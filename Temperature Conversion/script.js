const first=document.getElementById("first");
const second=document.getElementById("second");
const third=document.getElementById("third");
const result1=document.getElementById("result1");
const result2=document.getElementById("result2");
const result3=document.getElementById("result3");
function calculate(){
    let f = first.value;
    let s = second.value;
    let t = third.value;
    if(f.trim()==="" || s.trim()==="" || t.trim()===""){
        result1.textContent="Please enter temperature in each field";
        return;
    }
    f = Number(f);
    s = Number(s)

    t = Number(t);
    let celsius=(5/9)*(f - 32);
    let fahrenheit=(9/5)*s+32;
    let kelvin=t + 273.15;
    result1.textContent=`Celsius -> ${celsius}°C`;
    result2.textContent=`Fahrenheit -> ${fahrenheit}°F`;
    result3.textContent=`Kelvin -> ${kelvin}K`;
    
}