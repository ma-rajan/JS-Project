const passwordgen=document.getElementById("passwordgen");
const generate=document.getElementById("generate");
generate.addEventListener("click",e=>{
    let characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    let pass="";
    for(let i=0;i<8;i++){
        let rand=Math.floor(Math.random()*characters.length);
        pass+=characters[rand];
    }
    passwordgen.value=pass;
});

