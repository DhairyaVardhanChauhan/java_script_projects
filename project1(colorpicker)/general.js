const colors = ["green","red","rgba(133,122,200)","#f15025"];
const hexcol = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function get_rand(lst){
    if(Array.isArray(lst)){
        return Math.floor(Math.random()*lst.length);
    }
    else{
        return Math.floor(Math.random()*lst);
    }
}

function initiate_warning(){
    document.querySelector('.indicator-js').innerHTML = "Select an option first! :)";
}
function release_warning(){
    document.querySelector('.indicator-js').innerHTML = "";   
}

function remove_prev(new_select){
    let prev_on = document.querySelector('.general-flipper-active-css');
    if(prev_on){
        prev_on.classList.remove('general-flipper-active-css');
    }
    selected_button = new_select;
    console.log(selected_button);

}

let selected_button = "";
console.log(selected_button + " none");