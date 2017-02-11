import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import get from 'lodash/get';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import Helmet from 'react-helmet';
import { config } from 'config';
import include from 'underscore.string/include';
import Bio from 'components/Bio';
import PostPreview from 'components/PostPreview';

class BlogIndex extends React.Component {
  render() {
    // Sort pages.
    const sortedPages = reverse(sortBy(this.props.route.pages, 'data.date'));
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(
      page =>
        get(page, 'file.ext') === 'md' && !include(page.path, '/404') ||
          get(page, 'data.date'),
    );
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: 'description', content: 'Sample blog' },
            { name: 'keywords', content: 'blog, articles' },
          ]}
        />
        <div>
          {visiblePages.map(page => <PostPreview key={page.path} page={page} />)}
        </div>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;
