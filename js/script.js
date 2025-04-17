// ------------------for Nav list in small screen ------------------------
let san = document.querySelector(".sandwich");
let links = document.querySelector(".links");
let navBtn = document.querySelector(".nav-btn");

san.onclick = function(e){
    e.stopPropagation();
    links.classList.toggle("open");
    navBtn.classList.toggle("open");
};

document.addEventListener("click" , (e) => {
    if (e.target !== san && e.target !== links && e.target !== navBtn){
        if(links.classList.contains("open") && navBtn.classList.contains("open")){
            links.classList.toggle("open");
            navBtn.classList.toggle("open");
        };
    };
});
links.onclick = function(e){
    e.stopPropagation();
};
navBtn.click =  function(e){
    e.stopPropagation();
};
// ------------------for Ssearch Icon------------------------
let inpFoc = document.querySelectorAll('input[type = "text"]');
inpFoc.forEach(ele  =>{
    ele.addEventListener("focus" , () => {
        // ele.dataset.placeholder = ele.placeholder ;
        // ele.placeholder = '';
        let spanEl = ele.parentElement.querySelector("span i");
        spanEl.style.transition = '.5s'
        spanEl.style.opacity = '0';
    });

    ele.addEventListener("blur" , () => {
        // ele.placeholder = ele.dataset.placeholder ;
        let spanEl = ele.parentElement.querySelector("span i");
        spanEl.style.opacity = '1'
    });
})
// ------------------for Cards------------------------
let cards = document.querySelectorAll(".cards .card");

cards.forEach(card => {
    card.addEventListener('mouseenter' , () => {
        card.style.backgroundColor = 'var(--secondary-color)';
        card.style.color = '#fff' ;
    });
    card.addEventListener('mouseleave' , () => {
        card.style.backgroundColor = '#fff';
        card.style.color = 'var(--main-color)' ;
    });
});
// ------------------Scroll Down Fixed Icon------------------------
let scrollDown = document.querySelector(".landing .down");
// console.log(scrollDown)
let sections = document.querySelectorAll(".section");
let currentSectionIndex = 0 ;
scrollDown.addEventListener("click" , () => {
    //increase index
    currentSectionIndex++ ;
    //reset index if reached to the end 
    if(currentSectionIndex >= sections.length){
        currentSectionIndex =0 ;
    }
    //scroll to target section
    sections[currentSectionIndex].scrollIntoView({
        behavior : 'smooth'
    });
});

