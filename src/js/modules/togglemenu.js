const toggleMobileMenu = ({menuBtnSelector, mobileMenuBtnSelector, mobileMenuSelector, mobileMenuActiveClass}) => {
    const menuBtn = document.querySelector(menuBtnSelector),
          mobileMenuButton = document.querySelector(mobileMenuBtnSelector),
          mobileMenu = document.querySelector(mobileMenuSelector);

    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle(mobileMenuActiveClass);
    });

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle(mobileMenuActiveClass);
    });

};

export default toggleMobileMenu;