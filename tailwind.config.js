/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                light: '#FFF4E6',
                dark: '#272523',
                cyan: '#7BCDD0',
                purple: '#DEC3E4',
                green: '#D2FCBA',
                orange: '#FC9F7D'
            },
            width: {
                layout: '1134px'
            },
            maxWidth: {
                layout: '1134px'
            }
        }
    },
    safelist: [
        'light', 'dark', 'cyan', 'purple', 'green', 'orange',
        'bg-light', 'bg-dark', 'bg-cyan', 'bg-purple', 'bg-green', 'bg-orange'
    ],
    plugins: [ require("tailwind-scrollbar") ],
};
