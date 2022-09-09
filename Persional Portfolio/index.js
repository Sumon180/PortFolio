
//*************************ARROW*************************** */
let arrow = document.getElementById('uparrow');

window.onscroll = function(){
    let scroll = scrollY;

    if(scroll > 100){
        arrow.classList.add('active');
        
    }
    else{
        arrow.classList.remove('active');
    }
}

//*************************NAVBAR TOGGLAR*********************** */
const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener("click", navToggle);

function navToggle(){
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");

    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
}