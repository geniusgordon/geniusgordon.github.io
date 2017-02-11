import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm, scale } from 'utils/typography';
import styled from 'styled-components';
import get from 'lodash/get';
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

const PostTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin: 0;
`;

const PostDate = styled.div`
  font-size: ${() => rhythm(0.45)};
  line-height: ${() => rhythm(0.8)};
  color: #a6a6a6;
`;

const PostPreview = ({ page }) => (
  <Card style={{ boxShadow: 'none' }} to={prefixLink(page.path)}>
    <PostTitle>{get(page, 'data.title', page.path)}</PostTitle>
    <PostDate>{format(page.data.date, 'MMM DD, YYYY')}</PostDate>
  </Card>
);

export default PostPreview;
