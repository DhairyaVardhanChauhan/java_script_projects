let hexflip = document.querySelector('.hex-color-flipper-js');
hexflip.addEventListener('click',()=>{
    release_warning();  
    remove_prev("hex_button");
    if(selected_button == "hex_button"){
        hexflip.classList.remove("color-flipper-css-inactive");
        hexflip.classList.add("general-flipper-active-css");
    }
    else{
        hexflip.classList.add("color-flipper-css-inactive");
        hexflip.classList.remove("general-flipper-active-css");
    }
})

function generate_hex(){
    let col_gen = "#";
    for(let i =1;i<=6;i++){
        col_gen += hexcol[get_rand(hexcol)];
    }
    return col_gen;
}