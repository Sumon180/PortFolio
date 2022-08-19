

// let title = document.getElementById("count_title");
// let text = "Web Developer & Desginer";
// let index = 0;

// setInterval(function(){
//     if(index > text.length){
//         index = 0;
//     }
//     title.innerHTML = text.slice(0,index++);
// },100)

let arrow = document.getElementById('arrow');

window.onscroll = function(){
    let scroll = scrollY;

    if(scroll > 300){
        arrow.classList.add('active');
        
    }
    else{
        arrow.classList.remove('active');
    }
}