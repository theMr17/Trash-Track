/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            customStyles: {
                'backdrop': {
                  'backdrop-filter': 'blur(16px) saturate(180%)',
                  '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
                  'background-color': 'rgba(255, 255, 255, 0.75)',
                  'border-radius': '12px',
                  'border': '1px solid rgba(209, 213, 219, 0.3)',
                },
              },
        },
    },
    plugins: [],
};
