import './style.css';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

const password = document.querySelector('#password'),
    form = document.querySelector('form'),
    email = document.querySelector('#email'),
    button = document.querySelector('#login'),
    correctIcon = document.querySelector('#correct'),
    wrongIcon = document.querySelector('#wrong'),
    title = document.querySelector('#title');

document.addEventListener('alpine:init', () => {
    Alpine.store('form', {
        showPassword: false,
        correctEmail: 'test@mail.ru',
        correctPassword: '123123',

        emailErrorCleanup() {
            email.style.borderColor = '';
            wrongIcon.style.visibility = '';
            correctIcon.style.visibility = '';
        },

        // if correct email and password change button
        disabledButton() {
            if (form.checkValidity()) {
                button.removeAttribute('disabled');
                button.classList.add('correct-btn');
            } else {
                button.classList.remove('correct-btn');
            }
        },

        // check email validity
        checkValidEmail() {
            const validEmail = email.checkValidity();
            validEmail && this.emailErrorCleanup();
        },

        // change text in title
        changeTitleText(text) {
            title.textContent = text;
        },

        // change button
        changeButton(status) {
            if (status === 'invalid') {
                button.textContent = 'Retry';
                button.classList.add('invalid-btn');
            } else if (status === 'valid') {
                button.textContent = 'Login';
                button.classList.remove('invalid-btn');
            }
        },

        // wrong email
        wrongEmail() {
            if (email.value !== this.correctEmail) {
                email.style.borderColor = 'rgba(255, 0, 0, 1)';
                this.changeTitleText('Oops!');

                correctIcon.style.visibility = 'hidden';
                wrongIcon.style.visibility = 'visible';

                password.value = '';
                password.style.borderColor = '';

                this.changeButton('invalid');
            } else {
                this.emailErrorCleanup();
            }
        },

        // wrong password
        wrongPassword() {
            if (password.value !== this.correctPassword) {
                password.style.borderColor = 'rgba(255, 0, 0, 1)';
                this.changeTitleText('Wrong password');
                this.changeButton('invalid');
            } else {
                password.style.borderColor = '';
            }
        },

        // when correct email and password
        correctEmailAndPassword() {
            if (
                email.value === this.correctEmail &&
                password.value === this.correctPassword
            ) {
                this.changeTitleText('Welcome');
                this.changeButton('valid');
            }
        },

        togglePasswordState() {
            this.showPassword = !this.showPassword;
        },
    });
});

Alpine.start();
