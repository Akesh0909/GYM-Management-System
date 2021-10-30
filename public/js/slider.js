
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;
setInterval(() =>{
    next();
    }
,2000)
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}     