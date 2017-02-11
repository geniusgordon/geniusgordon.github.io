import React from 'react';
import { config } from 'config';
import { rhythm } from 'utils/typography';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: ${() => rhythm(0.5)};
  padding-bottom: ${() => rhythm(1)};
  display: flex;
`;

const Avatar = styled.img`
  margin-right: ${() => rhythm(1 / 4)};
  margin-bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

class Bio extends React.Component {
  render() {
    return (
      <Container>
        <Avatar src={config.profilePic} alt={`author ${config.authorName}`} />
        <p>
          Written by{' '}
          <strong>{config.authorName}</strong>
          {' '}who lives and works in Taiwan building useful things.{' '}
          <a href="https://twitter.com/geniusgordon">
            You should follow him on Twitter
          </a>
        </p>
      </Container>
    );
  }
}

export default Bio;
