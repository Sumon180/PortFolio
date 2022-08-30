

// let title = document.getElementById("count_title");
// let text = "Web Developer & Desginer";
// let index = 0;

// setInterval(function(){
//     if(index > text.length){
//         index = 0;
//     }
//     title.innerHTML = text.slice(0,index++);
// },100)

// let arrow = document.getElementById('arrow');

// window.onscroll = function(){
//     let scroll = scrollY;

//     if(scroll > 300){
//         arrow.classList.add('active');
        
//     }
//     else{
//         arrow.classList.remove('active');
//     }
// }

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