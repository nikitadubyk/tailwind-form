module.exports = {
    content: ['./index.html', './src/**/*.js'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            flex: {
                '1-auto': '1 0 auto',
                '0-auto': '0 0 auto',
            },
            width: {
                100: '29.5rem',
            },
        },
    },
    plugins: [],
};
