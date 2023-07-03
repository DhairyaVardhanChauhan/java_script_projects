btn.addEventListener('click',()=>{
    changebg(selected_button);
})


function changebg(button){
    console.log(button);
    if(selected_button == ""){
        initiate_warning();
        return;
    }
    if(button === "color_flipper_button"){
        let val = get_rand(colors);
        console.log(val);
        document.body.style.backgroundColor = colors[val];
        color.innerHTML = colors[val];
    }
    else if(button === "hex_button"){
        let selectedhex = generate_hex();
        console.log(selectedhex);
        document.body.style.backgroundColor = selectedhex;
        color.innerHTML = selectedhex;
    }
}