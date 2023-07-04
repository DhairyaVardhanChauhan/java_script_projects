// general value checker

let counter = document.querySelector('.counter-txt-js');
let prevbtn = "increase";

function valuechecker(){
    let value = Number(counter.innerHTML); // value retrieved from paragraphs are strings 
    if(value>0){
        counter.classList.add('green-counter-css');
    }
    else if(value === 0){
        if(counter.classList.contains('red-counter-css')){
            counter.classList.remove('red-counter-css');
        }
        if(counter.classList.contains('green-counter-css')){
            counter.classList.remove('green-counter-css');
        }
    }

    else{
        counter.classList.add('red-counter-css');
    }
}

// reset-button

let reset_btn = document.querySelector('.reset-js');

reset_btn.addEventListener('click',()=>{
    counter.innerHTML = 0;
    valuechecker();
})

// Decrease button 

let decrease_btn = document.querySelector('.decrease-js');

decrease_btn.addEventListener('click',()=>{
    prevbtn = "decrease";
    counter.innerHTML--;
    valuechecker();
})

// Increase button 

let increase_btn = document.querySelector('.increase-js');

increase_btn.addEventListener('click',()=>{
    prevbtn = "increase";
    counter.innerHTML++;
    valuechecker();
})

// auto clicker

let isenabled = false;
let id;
function increaser(){
    if(prevbtn === "increase"){
        counter.innerHTML++;
    }
    else if(prevbtn === "decrease"){
        counter.innerHTML--;
    }
    valuechecker();
}

function autoinc(){
    isenabled = !isenabled;
    if(isenabled){
        id = setInterval(increaser,100);
    }
    else{
        clearInterval(id);
    }
}

let auto_btn = document.querySelector('.auto-js');
auto_btn.addEventListener('click',()=>{
    autoinc();
})



