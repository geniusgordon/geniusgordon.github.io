import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import get from 'lodash/get';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { config } from 'config';
import include from 'underscore.string/include';
import Bio from 'components/Bio';
import PostPreview from 'components/PostPreview';

const Container = styled.div`
  padding-bottom: ${rhythm(2)};
`;

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
    const meta = [
      { property: 'og:title', content: config.blogTitle },
      { property: 'og:image', content: config.profilePic },
      {
        property: 'og:description',
        content:
          `Written by ${config.authorName} who lives and works in Taiwan building useful things.`
        ,
      },
    ];
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={meta}
        />
        <Container>
          {visiblePages.map(page => <PostPreview key={page.path} page={page} />)}
        </Container>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;
