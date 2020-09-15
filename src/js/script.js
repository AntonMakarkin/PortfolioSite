require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import floatHeader from './modules/floatheader';
import useWebp from './modules/testwebp';
import scrolling from './modules/scrolling';
import calculator from './modules/calculator';
import toggleMobileMenu from './modules/togglemenu';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    useWebp();
    floatHeader({
        activeClass: 'header_active',
        headerSelector: 'header'
    });
    scrolling('.pageUpButton');
    calculator({
        animationClass: 'fade',
        blockBtnClass: 'blocked_button'
    });  
    toggleMobileMenu({
        menuBtnSelector: '.menu_button',
        mobileMenuBtnSelector: '.mobile_menu > .menu_button',
        mobileMenuSelector: '.mobile_menu',
        mobileMenuActiveClass: 'show_mobile_menu'
    });
});



//Slider-calculator
/*let slideIndex = 1;
const calcSlides = document.querySelectorAll('.calculator'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');*/
