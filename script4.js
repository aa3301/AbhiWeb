const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
let sport11=document.getElementsByClassName("image");
window.addEventListener('scroll',function(){
    var value=window.scrollY;
    sport11.style.left=value*2.0+'px';

})
