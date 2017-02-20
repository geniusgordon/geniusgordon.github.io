import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { GoogleFont, TypographyStyle } from 'react-typography';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import typography from './utils/typography';

const BUILD_TIME = new Date().getTime();
styleSheet.flush();

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render() {
    const { body } = this.props;
    const head = Helmet.rewind();
    let css;
    if (process.env.NODE_ENV === 'production') {
      const styles = require('!raw!./public/styles.css') +
        styleSheet.rules().map(rule => rule.cssText).join('\n');
      css = <style dangerouslySetInnerHTML={{ __html: styles }} />;
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  },
});
