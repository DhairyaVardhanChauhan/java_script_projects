let btn = document.querySelector('.button-color-clickme');
let color = document.querySelector('.color-para');
let col_flip = document.querySelector('.color-flipper-js');


col_flip.addEventListener('click',()=>{
    release_warning();
    remove_prev("color_flipper_button");
    if(selected_button == "color_flipper_button"){
        col_flip.classList.remove("color-flipper-css-inactive");
        col_flip.classList.add("general-flipper-active-css");
    }
    else{
        col_flip.classList.add("color-flipper-css-inactive");
        col_flip.classList.remove("general-flipper-active-css");
    }
})


