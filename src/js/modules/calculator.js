const calculator = (animationClass, blockBtnClass) => {
    let slideIndex = 1,
        numberOfPages, numbersOfBlocks, numberOfHardBlocks,
        numberOfSlides, numberOfForms, numberOfCalculators;

    const slides = document.querySelectorAll('.calculator'),
          slidesLength = slides.length,
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          landingCheckBox = document.querySelector('input[id="landingButton"]'),
          siteCheckBox = document.querySelector('input[id="siteButton"]'),
          inputs = document.querySelectorAll('.counter_input');
          console.log(inputs);

    slides.forEach(item => item.classList.add(animationClass));

    function showSlides(numberOfSlide) {

        switch (numberOfSlide) {
            case slidesLength:
                prev.disabled = false;
                prev.classList.remove(blockBtnClass);
                next.disabled = true;
                next.classList.add(blockBtnClass);
                break;

            case 1:
                prev.disabled = true;
                prev.classList.add(blockBtnClass);
                next.disabled = false;
                next.classList.remove(blockBtnClass);
                break;
            
            default:
                prev.disabled = false;
                prev.classList.remove(blockBtnClass);
                next.disabled = false;
                next.classList.remove(blockBtnClass);
        }

        slides.forEach(item => {
            item.classList.add('showHide'); //hide slides
            item.classList.remove('showActive');
        });

        slides[slideIndex - 1].classList.remove('showHide');
        slides[slideIndex - 1].classList.add('showActive');
    }

    function changeSlide(changeDirection) {
        showSlides(slideIndex += changeDirection);
    }

    function getStaticInformation() {
        landingCheckBox.addEventListener('change', () => {
            siteCheckBox.checked = false;
            numberOfPages = 1;
        });

        siteCheckBox.addEventListener('change', () => {
            landingCheckBox.checked = false;
            //numberOfPages
        });
    }

    //calcTotal();

    showSlides(slideIndex);

    prev.addEventListener('click', function() {
        //if (landingCheckBox.checked == false || siteCheckBox.checked == false)
        changeSlide(-1);
    });

    next.addEventListener('click', function() {
        changeSlide(1);
    });
    
};

export default calculator;