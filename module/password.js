import changeTitleText from './changeTitle';
import { changeButton } from './button';

const password = document.querySelector('input[data-js-password]');

const passwordToggleView = () => {
    const eye = document.querySelector('svg[data-icon="eye"]'),
        eyeSlash = document.querySelector('svg[data-icon="eye-slash"]');

    eye.addEventListener('click', () => {
        password.setAttribute('type', 'password');
    });

    eyeSlash.addEventListener('click', () => {
        password.setAttribute('type', 'text');
    });
};

const wrongPassword = () => {
    if (password.value !== '123123') {
        password.style.borderColor = 'rgba(255, 0, 0, 1)';
        changeTitleText('Wrong password');
        changeButton('invalid');
    } else {
        password.style.borderColor = '';
    }
};

export { passwordToggleView, wrongPassword };
