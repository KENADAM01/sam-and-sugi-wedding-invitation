/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rapunzel': {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7e22ce',
                    800: '#6b21a8',
                    900: '#581c87',
                },
                'golden': {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                },
                'enchanted': {
                    forest: '#2d5016',
                    moss: '#4a7c59',
                    lavender: '#e6d5f5',
                    twilight: '#4a1d6d',
                },
                'magic': '#ffd700',
                'ivory': '#faf8f3',
            },
            fontFamily: {
                'display': ['Great Vibes', 'cursive'],
                'heading': ['Cormorant Garamond', 'serif'],
                'body': ['Montserrat', 'sans-serif'],
            },
            animation: {
                'float': 'float 15s infinite ease-in',
                'fadeInUp': 'fadeInUp 1.2s ease-out',
                'fadeInScale': 'fadeInScale 1s ease-out',
                'pulse-slow': 'pulse 2s ease-in-out infinite',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%': { bottom: '-50px', opacity: '0' },
                    '10%': { opacity: '0.6' },
                    '90%': { opacity: '0.6' },
                    '100%': { bottom: '110vh', opacity: '0' },
                },
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(40px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInScale: {
                    'from': { opacity: '0', transform: 'scale(0.8)' },
                    'to': { opacity: '1', transform: 'scale(1)' },
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '25%': { transform: 'scale(1.2)' },
                    '50%': { transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
}
