import changeTitleText from './changeTitle';
import { changeButton } from './button';

const email = document.querySelector('input[data-js-email]'),
    correctIcon = document.querySelector('svg[data-js-correct]'),
    wrongIcon = document.querySelector('svg[data-js-wrong]'),
    password = document.querySelector('input[data-js-password]');

function emailErrorCleanup() {
    email.style.borderColor = '';
    wrongIcon.style.visibility = '';
    correctIcon.style.visibility = '';
}

wrongIcon.addEventListener('click', () => {
    email.value = '';
    emailErrorCleanup();
});

email.addEventListener('input', () => {
    const validEmail = email.checkValidity();
    validEmail && emailErrorCleanup();
});

function wrongEmail() {
    if (email.value !== 'test@mail.ru') {
        email.style.borderColor = 'rgba(255, 0, 0, 1)';
        changeTitleText('Oops!');

        correctIcon.style.visibility = 'hidden';
        wrongIcon.style.visibility = 'visible';

        password.value = '';
        password.style.borderColor = '';

        changeButton('invalid');
    } else {
        emailErrorCleanup();
    }
}

function correctEmailAndPassword() {
    if (email.value === 'test@mail.ru' && password.value === '123123') {
        changeTitleText('Welcome');
        changeButton('valid');
    }
}

export { correctEmailAndPassword, wrongEmail };
