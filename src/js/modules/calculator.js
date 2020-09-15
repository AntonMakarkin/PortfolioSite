const calculator = ({animationClass, blockBtnClass}) => {
    let slideIndex = 1,
        numberOfPages = 1, numberOfBlocks, numberOfHardBlocks,
        numberOfSliders, numberOfModals, numberOfForms, numberOfCalculators;

    let costOfBlock = 500, costOfHardBlock = 1000, costOfSlider = 1000,
        costOfModal = 600, costOfForm = 1000, costOfCalculator = 1500, costOfAdaptive = 2000, costOfHosting = 1500;

    const slides = document.querySelectorAll('.calculator'),
          slidesLength = slides.length,
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          landingCheckBox = document.querySelector('input[id="landingButton"]'),
          siteCheckBox = document.querySelector('input[id="siteButton"]'),
          inputBlocks = document.querySelectorAll('.counter_blocks'),
          inputPagesBlock = inputBlocks[0],
          inputs = document.querySelectorAll('.counter_input'),
          inputPages = document.getElementById('number_of_pages'),
          inputNumberOfBlocks = document.getElementById('number_of_blocks'),
          inputNumberOfHardBlocks = document.getElementById('number_of_hardblocks'),
          inputNumberOfSliders = document.getElementById('number_of_sliders'),
          inputNumberOfModals = document.getElementById('number_of_modals'),
          inputNumberForms = document.getElementById('number_of_forms'),
          inputNumberOfCalculators = document.getElementById('number_of_calculators'),
          adaptiveCheckBox = document.querySelector('input[id="adaptiveButton"]'),
          hostingCheckBox = document.querySelector('input[id="hostingButton"]'),
          result = document.querySelector('.amount');

    slides.forEach(item => item.classList.add(animationClass));

    //started state
    landingCheckBox.checked = true;
    result.textContent = '0';

    //slider of calculator
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

    function checkTheFirstBlock () {
        if (landingCheckBox.checked == true && inputNumberOfBlocks.value == '') {
            inputPagesBlock.classList.add('counter_block_disabled');
            inputPages.disabled = true;
            next.disabled = true;
            next.classList.add(blockBtnClass);
        }
        else if(siteCheckBox.checked == true && 
          (inputPages.value == '' || inputNumberOfBlocks.value == '')) {
            next.disabled = true;
            next.classList.add(blockBtnClass);
        }
        else {
            next.disabled = false;
            next.classList.remove(blockBtnClass);
        }
    }

    function calcTotal() {
        let cost = numberOfPages * ((numberOfBlocks * costOfBlock) - (numberOfHardBlocks * costOfBlock) + 
        (numberOfHardBlocks * costOfHardBlock) + (numberOfSliders * costOfSlider) + 
        (numberOfModals * costOfModal) + (numberOfForms * costOfForm) + 
        (numberOfCalculators * costOfCalculator)) + (costOfAdaptive + costOfHosting);

        result.style.fontssize = "100px";
        result.textContent = cost;
        console.log(cost);
    }

    calcTotal();

    landingCheckBox.addEventListener('change', () => {
        if (landingCheckBox.checked == true) {
            siteCheckBox.checked = false;
            numberOfPages = 1;
        } else {
            siteCheckBox.checked = true;
        }

        if (landingCheckBox.checked == true) {
            inputPagesBlock.classList.add('counter_block_disabled');
            inputPages.value = '';
            inputPages.disabled = true;
        } else {
            inputPages.classList.remove('counter_block_disabled');
            inputPages.disabled = false;
        }

        calcTotal();
        checkTheFirstBlock();
    });

    siteCheckBox.addEventListener('change', () => {
        if (siteCheckBox.checked == true) {
            landingCheckBox.checked = false;
        } else {
            landingCheckBox.checked = true;
        }

        if (siteCheckBox.checked == true) {
            inputPagesBlock.classList.remove('counter_block_disabled');
            inputPages.disabled = false;
        } else {
            inputPagesBlock.classList.add('counter_block_disabled');
            inputPages.disabled = true;
        }

        checkTheFirstBlock();
    });

    //take number of pages from input
    inputPages.addEventListener('input', function() {
        numberOfPages = +inputPages.value;
        checkTheFirstBlock();
        calcTotal();
    });

    //take number of blocks from input
    inputNumberOfBlocks.addEventListener('input', function() {
        numberOfBlocks = +inputNumberOfBlocks.value;
        checkTheFirstBlock();
        calcTotal();
    });

    //take number of hard blocks from input
    inputNumberOfHardBlocks.addEventListener('input', function() {

        let nmbOfHrdBlcks = +inputNumberOfHardBlocks.value;

        if (nmbOfHrdBlcks > numberOfBlocks) {
            this.value = '';
        } else {
            numberOfHardBlocks = nmbOfHrdBlcks;
        }

        checkTheFirstBlock();
        calcTotal();
    });

    inputNumberOfSliders.addEventListener('input', function() {
        numberOfSliders = +inputNumberOfSliders.value;
        calcTotal();
    });

    inputNumberOfModals.addEventListener('input', function() {
        numberOfModals = +inputNumberOfModals.value;
        calcTotal();
    });

    inputNumberForms.addEventListener('input', function() {
        numberOfForms = +inputNumberForms.value;
        calcTotal();
    });

    inputNumberOfCalculators.addEventListener('input', function() {
        numberOfCalculators = +inputNumberOfCalculators.value;
        calcTotal();
    });

    adaptiveCheckBox.addEventListener('change', function() {
        if(adaptiveCheckBox.checked == true) {
            costOfAdaptive = 3000;
        } else {
            costOfAdaptive = 0;
        }
        calcTotal();
    });

    hostingCheckBox.addEventListener('change', function() {
        if(hostingCheckBox.checked == true) {
            costOfHosting = 1000;
        } else {
            costOfHosting = 0;
        }
        calcTotal();
    });





    //calcTotal();

    showSlides(slideIndex);
    checkTheFirstBlock();

    prev.addEventListener('click', function() {
        changeSlide(-1);
    });

    next.addEventListener('click', function() {
        changeSlide(1);
    });
    
};

export default calculator;