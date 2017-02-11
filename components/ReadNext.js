import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { prune, include } from 'underscore.string';
import find from 'lodash/find';
import styled from 'styled-components';
import { rhythm, scale } from 'utils/typography';

const Label = styled.h6`
  font-size: ${() => scale(-0.5).fontSize};
  line-height: ${() => scale(-0.5).lineHeight};
  margin: 0;
  letter-spacing: -0.25;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: ${() => rhythm(1 / 4)};
`;

class ReadNext extends React.Component {
  render() {
    const { pages, post } = this.props;
    const { readNext } = post;
    let nextPost;
    if (readNext) {
      nextPost = find(pages, page => include(page.path, readNext));
    }
    if (!nextPost) {
      return React.createElement('noscript', null);
    } else {
      nextPost = find(pages, page =>
        include(page.path, readNext.slice(1, -1)));
      // Create pruned version of the body.
      const html = nextPost.data.body;
      const body = prune(html.replace(/<[^>]*>/g, ''), 200);

      return (
        <div>
          <Label>READ THIS NEXT:</Label>
          <Title>
            <Link
              to={{
                pathname: prefixLink(nextPost.path),
                query: {
                  readNext: true,
                },
              }}
            >
              {nextPost.data.title}
            </Link>
          </Title>
          <p>{body}</p>
          <hr />
        </div>
      );
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
};

export default ReadNext;
