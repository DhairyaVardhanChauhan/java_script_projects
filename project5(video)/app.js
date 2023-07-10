const btn = document.querySelector('.switch-btn');
const video =  document.querySelector('.video-container');
const btnspan = document.querySelector('.switch');


let toggle = false;
btn.addEventListener('click',()=>{
    toggle = !toggle;
    if(toggle){
        btnspan.classList.add('switch-active');
        video.pause();
    }
    else{
        btnspan.classList.remove('switch-active');
        video.play(); 
    }
})

// preloader function
let preload = document.querySelector(".preloader");
window.addEventListener("load",()=>{
    preload.classList.add('preloader-loaded');
})