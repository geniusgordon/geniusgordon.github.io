import React from 'react';
import styled from 'styled-components';
import { rhythm } from 'utils/typography';
import GithubIcon from 'react-icons/lib/fa/github';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import { config } from 'config';

const Link = styled.a`
  margin: ${'0 ' + rhythm(0.15)};
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const createSocialIcon = (Icon, link) => (props) => (
  <Link href={link} target="_blank">
    <Icon {...props} />
  </Link>
);

export const Github = createSocialIcon(GithubIcon, config.github);
export const Twitter = createSocialIcon(TwitterIcon, config.twitter);
export const Facebook = createSocialIcon(FacebookIcon, config.facebook);
export const LinkedIn = createSocialIcon(LinkedInIcon, config.linkedin);

export default { Github, Twitter, Facebook, LinkedIn };
