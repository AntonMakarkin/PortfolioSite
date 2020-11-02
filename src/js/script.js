require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import floatHeader from './modules/floatheader';
import useWebp from './modules/testwebp';
import scrolling from './modules/scrolling';
import calculator from './modules/calculator';
import toggleMobileMenu from './modules/togglemenu';
import sendMail from './modules/form';

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
        blockBtnClass: 'blocked_button',
        currentCounter: '#current',
        totalCounter: '#total',
        blockPrice: 500,
        hardBlockPrice: 1000,
        sliderPrice: 1000,
        modalPrice: 600,
        formPrice: 1000,
        calculatorPrice: 1500,
        adaptivePrice: 2000,
        hostingPrice: 1500
    });  
    toggleMobileMenu({
        menuBtnSelector: '.menu_button',
        mobileMenuBtnSelector: '.mobile_menu > .menu_button',
        mobileMenuSelector: '.mobile_menu',
        mobileMenuActiveClass: 'show_mobile_menu'
    });
    sendMail();

});

