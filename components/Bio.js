import React from 'react';
import { config } from 'config';
import { rhythm } from 'utils/typography';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const Avatar = styled.img`
  float: left;
  margin-right: ${() => rhythm(1 / 4)};
  margin-bottom: 0;
  width: ${() => rhythm(2)};
  height: ${() => rhythm(2)};
  border-radius: 50%;
`;

class Bio extends React.Component {
  render() {
    return (
      <p style={{ marginBottom: rhythm(2.5) }} >
        <Avatar src={config.profilePic} alt={`author ${config.authorName}`} />
        Written by{' '}
        <strong>{config.authorName}</strong>
        {' '}who lives and works in Taiwan building useful things.{' '}
        <a href="https://twitter.com/geniusgordon">
          You should follow him on Twitter
        </a>
      </p>
    );
  }
}

export default Bio;
