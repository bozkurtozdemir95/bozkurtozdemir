/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/**/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'title': ['Aleo'],
            'body': ['Poppins'],
        },
        extend:{
            transitionProperty: {
                'max-height': 'max-height'
            }
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

