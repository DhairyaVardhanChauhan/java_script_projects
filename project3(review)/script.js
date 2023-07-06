let nextbtn = document.querySelector('.move-next-js');
let data_idx = 0;

let content = document.querySelector('.review-dynamic-container-js');
nextbtn.addEventListener('click', () => {
    data_idx = (data_idx + 1) % data.length; 
    set_data();
});


let prevbtn = document.querySelector('.move-prev-js');
prevbtn.addEventListener('click', () => {
    if(data_idx){
        data_idx = data_idx -1;
    }
    else{
        data_idx = data.length-1;
    }
    set_data(); 
});


function set_data(){

    content.innerHTML = `
    <div class="review-image-css">
        <div class="quote-holder">
            <img class="quotes-css" src="/project3(review)/project_3_images/quote.png" alt="">
        </div>
        <div class="background-overlay"></div>
        <img class="person-img-js" src="${data[data_idx].image_person}" alt="">
    </div>
    <div class="review-details-css">
        <p class="name-para-css">${data[data_idx].name}</p>
        <p class="designation-para-css">${data[data_idx].designation}</p>
        <p class="content-para-css">${data[data_idx].about_txt}</p>
    </div>
`
}

let surprise_me = document.querySelector(".surprise-me-js");

function call_random(){
    return Math.floor(Math.random()*data.length);
}

surprise_me.addEventListener('click',()=>{
    console.log(call_random());
    data_idx = call_random();
    // console.log(data_idx);
    set_data();
})