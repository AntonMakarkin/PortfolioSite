const sendMail = () => {
    const forms = document.querySelectorAll('form'),
          loader = document.querySelector('.loadscreen'),
          spinner = document.querySelector('.spinner'),
          overlay = document.querySelector('.overlay'),
          popupHeader = document.querySelector('.popup > h2'),
          popupMessage = document.querySelector('.popup > p'),
          popupClose = document.querySelector('.close_popup');
          console.log(popupMessage);

    const headerMessage = {
        success: 'Спасибо за заявку',
        failure: 'Ошибка'
    };

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Перезагрузите страницу или попробуйте еще раз'
    };

    popupClose.addEventListener('click', () => {
        overlay.classList.add('showHideModal');
        overlay.classList.remove('fade');
    });

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            spinner.classList.add('spin');
            loader.classList.remove('showHideLoader');
            loader.classList.add('fadeLoader');
            loader.classList.add('showActive');

            function restartForm() {
                loader.classList.remove('showActive');
                loader.classList.add('showHideLoader');
                spinner.classList.remove('spin');
                form.reset();
            }

            function sendMail() {
                const request = new XMLHttpRequest();
                request.open('POST', 'sendmail.php');
                const formData = new FormData(form);

                request.send(formData);

                request.addEventListener('load', () => {
                    if (request.status === 200) {
                        console.log(request.response);
                        popupHeader.textContent = headerMessage.success;
                        popupMessage.textContent = message.success;
                        overlay.classList.remove('showHideModal');
                        overlay.classList.add('fade');
                        restartForm();
                    } else {
                        popupHeader.textContent = headerMessage.failure;
                        popupMessage.textContent = message.failure;
                        overlay.classList.remove('showHideModal');
                        overlay.classList.add('fade');
                        restartForm();
                    }
                });
            }

            setTimeout(sendMail, 1000);

        });
    }
};

export default sendMail;