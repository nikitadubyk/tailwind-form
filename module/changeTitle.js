const changeTitleText = titleText => {
    const title = document.querySelector('h2[data-js-title]');
    title.textContent = titleText;
};

export default changeTitleText;
