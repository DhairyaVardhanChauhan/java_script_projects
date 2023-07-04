let btn = document.querySelector('.button-color-clickme');
let color = document.querySelector('.color-para');
let col_flip = document.querySelector('.color-flipper-js');

let invert_col = false;
col_flip.addEventListener('click',()=>{
    release_warning();
    invert_col = !invert_col;

    if(invert_col){
        document.body.style.filter = "invert(90%)";
        col_flip.classList.remove("color-flipper-css-inactive");
        col_flip.classList.add("invert-general-flipper-active-css");
    }
    else{
        document.body.style.filter = "invert(0%)";
        col_flip.classList.add("color-flipper-css-inactive");
        col_flip.classList.remove("invert-general-flipper-active-css");
    }
})
