const button = document.querySelector('button[data-js-button]');

const disabledButton = () => {
    const form = document.querySelector('form[data-js-form]');

    document.addEventListener('input', () => {
        if (form.checkValidity()) {
            button.removeAttribute('disabled');
            button.classList.add('correct-btn');
        } else {
            button.classList.remove('correct-btn');
        }
    });
};

const changeButton = status => {
    if (status === 'invalid') {
        button.textContent = 'Retry';
        button.classList.add('invalid-btn');
    } else if (status === 'valid') {
        button.textContent = 'Login';
        button.classList.remove('invalid-btn');
    }
};

export { disabledButton, changeButton };
