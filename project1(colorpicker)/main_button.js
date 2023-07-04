btn.addEventListener('click',()=>{
    changebg(selected_button);
})


function changebg(button){
    console.log(button);
    if(selected_button == ""){
        initiate_warning();
        return;
    }

    if(button === "hex_button"){
        let selectedhex = generate_hex();
        console.log(selectedhex);
        document.body.style.backgroundColor = selectedhex;
        color.innerHTML = selectedhex;
    }
    else if(button === "rgb_button"){
        let selected_rgb = generate_rgb();
        console.log(selected_rgb);
        document.body.style.backgroundColor = selected_rgb;
        color.innerHTML = selected_rgb;
    }
}