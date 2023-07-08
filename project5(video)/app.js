const btn = document.querySelector('.switch-btn');
const video =  document.querySelector('.video-container');


let toggle = false;
btn.addEventListener('click',()=>{
    toggle = !toggle;
    if(toggle){
        btn.classList.add('switch-active');
        btn.classList.remove('switch');
    }
    else{
        btn.classList.add('switch');
        btn.classList.remove('switch-active');
    }
})