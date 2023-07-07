let hambtn = document.querySelector('.ham-btn');
let triggered = false;
console.log("hello");
let areabtn = document.querySelector('.media-area-js');
hambtn.addEventListener('click',()=>{
    console.log("hello");
    triggered = !triggered;
    if(triggered){
        hambtn.classList.add('rotator-onclk');
        areabtn.classList.add('triggered-css');
        areabtn.classList.remove('media-area-css');

    }
    else{
        hambtn.classList.remove('rotator-onclk');
        areabtn.classList.add('media-area-css');
        areabtn.classList.remove('triggered-css')
    }
})