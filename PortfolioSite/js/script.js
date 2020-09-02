'use strict';

//This plugin will know: Can this browser use webp?
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


//Change header class if an user started to scroll the page
const header = document.querySelector('header'),
      html = document.documentElement;

window.addEventListener('scroll', () => {
    if (html.scrollTop > 0) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
});

//Slider-calculator
let slideIndex = 1;
const calcSlides = document.querySelectorAll('.calculator'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');
