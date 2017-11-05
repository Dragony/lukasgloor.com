import Typography from 'typography';
import lawtonTheme from 'typography-theme-lawton';

lawtonTheme.baseFontSize = '24px';
lawtonTheme.scaleRatio = 3;
lawtonTheme.headerFontFamily = ['Helvetica Neue', 'Segoe UI'];
lawtonTheme.headerWeight = '100';
lawtonTheme.bodyFontFamily = ['Lato', 'sans-serif'];

const typography = new Typography(lawtonTheme);
export default typography;
