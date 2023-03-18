let sports2=document.getElementById("sports2");
let sports5=document.getElementById("sports5");
let sport10=document.getElementById("sport10")
let text=document.getElementById("text");

window.addEventListener('scroll',function(){
    var value=window.scrollY;

    sports2.style.left=-value*2.0+'px';

    sports5.style.left=value*2.0+'px';
    sport10.style.left=value*0.8+'px';
    
    
})
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
