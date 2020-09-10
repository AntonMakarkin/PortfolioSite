function floatHeader(headerSelector, activeClass) {
    const header = document.querySelector(headerSelector),
          html = document.documentElement;

    window.addEventListener('scroll', () => {
        if (html.scrollTop > 0) {
            header.classList.add(activeClass);
        } else {
            header.classList.remove(activeClass);
        }
    });
}

export default floatHeader;