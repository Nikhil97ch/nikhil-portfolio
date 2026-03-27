// Typing Effect
const words = [
"JavaScript Developer 💻",
"Creative Designer 🎨",
"MERN Stack Learner 🚀"
];

let i=0, j=0, current="";
let typing = document.getElementById("typing");

function type(){
current = words[i];
typing.textContent = current.slice(0, ++j);

if(j === current.length){
i = (i+1)%words.length;
j = 0;
setTimeout(type,1200);
}else{
setTimeout(type,80);
}
}
type();


// Scroll Reveal
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
let top = el.getBoundingClientRect().top;
let windowHeight = window.innerHeight;

if(top < windowHeight-100){
el.classList.add("active");
}
});
});


// Particle Background
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});