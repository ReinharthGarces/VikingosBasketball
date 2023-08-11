/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('VkingosLogo.png)"
      },
      colors: {
      'first-color': '#8E0E00',
      'second-color': '#1F1C18'
    }
  },
  plugins: [],
 }
}

