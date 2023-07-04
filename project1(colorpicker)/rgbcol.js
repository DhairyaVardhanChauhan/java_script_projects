let rgbflip = document.querySelector('.rgb-color-flipper-js');  
rgbflip.addEventListener('click',()=>{
    release_warning();  
    remove_prev("rgb_button");
    if(selected_button === "rgb_button"){
        rgbflip.classList.remove("color-flipper-css-inactive");
        rgbflip.classList.add("general-flipper-active-css");
    }
    else{
        rgbflip.classList.add("color-flipper-css-inactive");
        rgbflip.classList.remove("general-flipper-active-css");
    }
})

function generate_rgb(){
    let col_gen = "rgb(";
    for(let i = 0;i<3;i++){
        col_gen += get_rand(256) + ",";
    }
    col_gen = col_gen.substring(0, col_gen.length - 1);
    col_gen +=")";
    return col_gen;
}