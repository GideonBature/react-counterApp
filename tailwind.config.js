/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


function fibounacci(n) {
  
  if (n < 2) {
    return n
  }
  return fibounacci(n - 1) + fibounacci(n - 2)
}