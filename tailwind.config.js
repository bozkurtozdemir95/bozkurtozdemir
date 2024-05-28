/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/**/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'title': ['Aleo'],
            'body': ['Poppins'],
        },
        extend:{}
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

