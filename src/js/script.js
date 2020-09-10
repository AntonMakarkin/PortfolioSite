require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import floatHeader from './modules/floatheader';
import useWebp from './modules/testwebp';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    useWebp();
    floatHeader('header', 'header_active');
    scrolling('.pageUpButton');

});



//Slider-calculator
/*let slideIndex = 1;
const calcSlides = document.querySelectorAll('.calculator'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');*/
