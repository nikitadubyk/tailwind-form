import { wrongPassword } from './password';
import { correctEmailAndPassword, wrongEmail } from './email';

const form = () => {
    const form = document.querySelector('form[data-js-form]');

    form.addEventListener('submit', e => {
        e.preventDefault();
        correctEmailAndPassword();
        wrongPassword();
        wrongEmail();
    });
};

export default form;
