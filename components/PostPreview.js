import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm, scale } from 'utils/typography';
import styled from 'styled-components';
import get from 'lodash/get';
import format from 'date-fns/format';
import { preview } from 'utils/preview';

const Card = styled(Link)`
  display: block;
  background-color: #fff;
  padding: ${rhythm(0.75)};
  margin-bottom: ${rhythm(0.5)};
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
  font-size: ${scale(-0.2).fontSize};
  line-height: ${scale(-0.2).lineHeight};
  color: #a6a6a6;
`;

const FeaturedImage = styled.img`
  margin: 0;
  width: 100%;
`;

const Content = styled.p`
  margin: 0;
`;

const FakeLink = styled.span`
  color: #007acc;
  text-decoration: underline;
`;

const ReadMore = styled.p`
  font-size: ${scale(-1).fontSize};
  line-height: ${scale(-1).lineHeight};
  color: #a6a6a6;
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`;

// split html by <a>
// and replace <a> with <span /> to avoid nested <a>
const renderPreview = body => {
  const elements = [];
  let buffer = [];
  body.split('\n').forEach((element, i) => {
    if (/<a/.test(element)) {
      elements.push(
        <div key={i} dangerouslySetInnerHTML={{ __html: buffer.join('\n') }} />,
      );
      const parts = element.split(/(<a.*?<\/a>)/);
      const content = parts.map(part => {
        if (/<a/.test(part)) {
          const text = part.match(/>(.*)</)[1];
          const href = part.match(/href="(.*?)"/)
            ? element.match(/href="(.*?)"/)[1]
            : '';
          return (
            <FakeLink
              key={`link-${i}`}
              onClick={e => {
                window.location.href = href;
                e.preventDefault();
              }}
            >
              {text}
            </FakeLink>
          );
        }
        return part.replace(/<\/?p>/, '');
      });
      elements.push(<p>{content}</p>);
      buffer = [];
    } else {
      buffer.push(element);
    }
  });
  elements.push(
    <div key="end" dangerouslySetInnerHTML={{ __html: buffer.join('\n') }} />,
  );
  return elements;
};

const PostPreview = ({ page }) => {
  const content = preview(page.data.body);
  const date = get(page, 'data.date');
  const featuredImage = get(page, 'data.featuredImage');
  return (
    <Card to={prefixLink(page.path)}>
      <Title>{get(page, 'data.title', page.path)}</Title>
      {date ? <Date>{format(date, 'MMM DD, YYYY')}</Date> : null}
      {featuredImage ? <FeaturedImage src={featuredImage} /> : null}
      {renderPreview(content)}
      <ReadMore>Read more...</ReadMore>
    </Card>
  );
};

export default PostPreview;
