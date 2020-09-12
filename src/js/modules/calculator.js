const calculator = () => {
    let slideIndex = 1;
    const slides = document.querySelectorAll('.calculator'),
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n == slides.length) {
            next.disabled = true;
            next.style.background = 'grey';
        }
        slides.forEach(function(item) {
            item.style.display = 'none'; //hide slides
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
    
};

export default calculator;