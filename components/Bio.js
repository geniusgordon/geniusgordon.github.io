import React from 'react';
import { config } from 'config';
import { rhythm, scale } from 'utils/typography';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';
import { Github, Twitter, Facebook, LinkedIn } from 'components/SocialIcon';

const Container = styled.div`
  padding-top: ${rhythm(0.5)};
  padding-bottom: ${rhythm(0.5)};
  display: flex;
`;

const Avatar = styled.img`
  margin-right: ${rhythm(1 / 4)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: 50%;
`;

const Social = styled.span`
  font-size: ${scale(0.3).fontSize};
  line-height: ${scale(0.3).lineHeight};
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
          <Social>
            <Github />
            <Twitter />
            <Facebook />
            <LinkedIn />
          </Social>
        </p>
      </Container>
    );
  }
}

export default Bio;
