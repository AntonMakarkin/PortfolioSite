function scrolling(upElemSelector) {
    const upElem = document.querySelector(upElemSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('showElem');
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
            upElem.classList.remove('showElem');
        }
    });

    const element = document.documentElement,
          body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function(event) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);
        });
    };
}

export default scrolling;