import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.baseFontSize = '18px';
Wordpress2016.googleFonts.push({
  name: 'Fira+Mono',
  styles: ['400', '400i'],
});
Wordpress2016.overrideThemeStyles = ({ rhythm, scale }) => ({
  'code': {
    fontFamily: 'Fira Mono, monospace',
    fontSize: rhythm(0.5),
    lineHeight: rhythm(0.75),
  }
});
const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
