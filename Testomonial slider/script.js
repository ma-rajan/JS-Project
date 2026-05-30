const images=[
    "images/1.jpg",
    "images/2.jpg",
     "images/3.jpeg",
      "images/4.png",
       "images/5.png"
];

const image=document.getElementById("image");
const about=document.getElementById("about");
let index=0;
function next(){
    index++;
    if(index>=images.length){
        index=0;
    }
    image.src=images[index];
    switch(index){
        case 0:
            about.textContent="C is a general-purpose programming language developed by Dennis Ritchie in 1972.It is used for system programming like operating systems and embedded systems.C is fast, powerful, and forms the base of many modern programming languages.";
        break;

        case 1:
            about.textContent="C++ is an object-oriented programming language developed by Bjarne Stroustrup in 1985.It is an extension of C that supports concepts like classes, objects, inheritance, and polymorphism.C++ is widely used for software development, game development, and high-performance applications.";
            break;

        case 2:
            about.textContent="Java is an object-oriented programming language developed by James Gosling at Sun Microsystems in 1995.It follows the principle Write Once, Run Anywhere, allowing programs to run on different platforms using the Java Virtual Machine (JVM).Java is widely used for desktop applications, web applications, Androiddevelopment, and enterprise software.";
            break;

        case 3:
            about.textContent="JavaScript is a high-level programming language developed by Brendan Eich in 1995.It is mainly used to make web pages interactive and dynamic.JavaScript is widely used for front-end and back-end web development, games, and web applications.";
            break;

        case 4:
            about.textContent="Docker is an open-source platform used to develop, deploy, and run applications in containers.It allows applications and their dependencies to be packaged together, ensuring they run consistently across different environments.Docker is widely used in software development, testing, and cloud deployment for its portability and efficiency.";
            break;
        }


}