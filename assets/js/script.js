let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesbtn = document.querySelectorAll('.circle');

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    slidesbtn.forEach((sliderbtn, index) => {
        sliderbtn.classList.remove('active');
        if (index === slideIndex) {
            sliderbtn.classList.add('active');
        }
    });
}

function CurrentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    console.log("clicked");
}

showSlides(slideIndex);

slidesbtn.forEach((sliderbtn, index) => {
    sliderbtn.addEventListener('click', () => {
        CurrentSlide(index);
    });
});


document.addEventListener('DOMContentLoaded',function(){

 const images = ['assets/images/hover1.png', 'assets/images/hover2.jpg', 'assets/images/hover3.jpg'];

    const cards =document.querySelectorAll('.card2');
    const mainImage =document.getElementById('main-image');
    
    cards.forEach(function(card){
        card.addEventListener('click',function(){
            const index =parseInt(card.getAttribute('data-index'));
            mainImage.src =images[index];
            console.log(index)
        })
    })

})