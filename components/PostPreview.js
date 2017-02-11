import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm, scale } from 'utils/typography';
import styled from 'styled-components';
import get from 'lodash/get';
import prune from 'underscore.string/prune';
import format from 'date-fns/format';

const Card = styled(Link)`
  display: block;
  background-color: #fff;
  padding: ${() => rhythm(1)};
  margin-bottom: ${() => rhythm(0.5)};
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  border: 1px solid rgba(0,0,0,.09);
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h3`
  font-family: Montserrat, sans-serif;
  margin: 0;
`;

const Date = styled.div`
  font-size: ${() => scale(-0.2).fontSize};
  line-height: ${() => scale(-0.2).lineHeight};
  color: #a6a6a6;
`;

const Content = styled.p`
  margin: 0;
`;

const ReadMore = styled.p`
  font-size: ${() => scale(-1).fontSize};
  line-height: ${() => scale(-1).lineHeight};
  color: #a6a6a6;
  margin-top: ${() => rhythm(1)};
  margin-bottom: 0;
`;

const PostPreview = ({ page }) => {
  console.log(page);
  const content = get(page, 'data.body', '');
  const preview = prune(content.replace(/<[^>]*>/g, ''), 200);
  return (
    <Card style={{ boxShadow: 'none' }} to={prefixLink(page.path)}>
      <Title>{get(page, 'data.title', page.path)}</Title>
      <Date>{format(page.data.date, 'MMM DD, YYYY')}</Date>
      <Content>{preview}</Content>
      <ReadMore>Read more...</ReadMore>
    </Card>
  );
};

export default PostPreview;
