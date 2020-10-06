module.exports = {
  purge: {
    mode: 'all',
    content: [
      './src/**/*.html',
      './src/*.html',
      './src/js/**/*.js',
    ]
  },
  theme: {
    spacing: {
      '5px': '5px',
      '10px': '10px',
      '15px': '15px',
      '16px': '16px',
      '25px': '25px',
      '60px': '60px',
      '390px': '390px',
      '310px': '310px'
    },
    borderWidth: {
      '2': '2px',
      '3': '3px'
    },
    extend: {
      gridTemplateColumns: {
        'repeat': 'repeat(auto-fill, minmax(100px, 1fr))'
      }
    },
    zIndex: {
      '1': 1
    },
    backgroundColor: theme => ({
      'midnight-blue': '#1b1c6f',
      'dark-blue': 'rgb(45, 22, 164)'
    }),
    boxShadow: {
      'midnight-blue': 'rgba(15, 2, 49, 0.35) 0px 5px 5px inset'
    }
  },
  variants: {},
  plugins: []
}
