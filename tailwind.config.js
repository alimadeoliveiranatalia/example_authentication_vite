/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image_background': 'url(../../public/background_machine.jpg)'
      }
    },
  },
  plugins: [],
}

