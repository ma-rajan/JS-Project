const notes=document.getElementById("notes");
const box=document.getElementById("box");

box.addEventListener("click",e=>{
    let content=document.createElement("textarea");
    content.style.border="1px solid black";
    content.style.width="15rem";
    content.style.height="10rem";
    content.style.borderRadius="5%";
    content.style.boxShadow="0px 1px 10px";
    content.placeholder="Enter note";
    content.style.margin="2rem";
    content.addEventListener("dblclick",e=>{
        content.remove();
    });
    notes.appendChild(content);

});