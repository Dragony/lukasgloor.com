import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '30px',
  scaleRatio: 3.5,
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Lato',
      styles: ['100', '300', '500', '900']
    },
    {
      name: 'Work Sans',
      styles: ['100', '300', '500', '900']
    }
  ],
  headerFontFamily: ['Work Sans', 'sans-serif'],
  headerWeight: '900',
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyWeight: '300'
  // See below for the full list of options.
});

export default typography;
