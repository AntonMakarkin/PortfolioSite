const scrolling = (upElemSelector) => {
    const upElem = document.querySelector(upElemSelector),
          mainBlockHeight = document.querySelector('.main').clientHeight,
          mobileMenu = document.querySelector('.mobile_menu');
          upElem.style.pointerEvents = 'none';

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= mainBlockHeight) {
            upElem.style.pointerEvents = 'auto';
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
            upElem.style.pointerEvents = 'none';
        }
    });

    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.2;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            mobileMenu.classList.remove('show_mobile_menu');

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : 
                    Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                    if(r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
            }
        });
    });
};

export default scrolling;