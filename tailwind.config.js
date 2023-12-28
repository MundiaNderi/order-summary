/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)',
        textBlue: 'hsla(223, 23%, 55%, 1)',
        linkBlue: 'hsla(245, 75%, 52%, 1)'
      },
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily: {
        redhat: ['Red hat display', 'sans-serif'],
      }, 
    
    },
  },
  plugins: [],
}