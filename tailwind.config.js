export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image': "url('./src/assets/backgroundImg.png')"
            },
            colors: {
                'logo-color': '#282538',
                'gray': '#B7BCCE',
                'light-blue': '#1E86FF',
                'light-gray': '#F6F7FB'
            },
            spacing: {
                '30': '30%',
                '70': '68%',
                '114px': '114px',
                '90px': '90px',
            }
        },
    },
    plugins: [],
}