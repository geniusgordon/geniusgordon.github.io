import React from 'react';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import styled from 'styled-components';
import ReactDisqusThread from 'react-disqus-thread';
import { rhythm, scale } from 'utils/typography';
import { preview, removeTags } from 'utils/preview';
import { config } from 'config';
import Bio from 'components/Bio';
import ReadNext from 'components/ReadNext';
import '../css/zenburn.css';

const Container = styled.div`
  padding: ${() => '0 ' + rhythm(0.75)};
`;

const Date = styled.div`
  font-size: ${() => scale(-0.2).fontSize};
  line-height: ${() => scale(-0.2).lineHeight};
  color: #878787;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const FeaturedImage = styled.img`
  width: 100%;
`;

const Hr = styled.hr`
  margin-bottom: ${() => rhythm(1)};
`;

const Padding = styled.div`
  width: 100%;
  margin-bottom: ${props => rhythm(props.rhythm || 1)};
`;

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const title = `${post.title} | ${config.blogTitle}`;
    const description = removeTags(preview(post.body));
    const { featuredImage } = post;
    const meta = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
    ];
    if (featuredImage) {
      meta.push({ property: 'og:image', content: featuredImage });
    }
    return (
      <Container className="markdown">
        <Helmet title={title} meta={meta} />
        <Date>{format(post.date, 'MMM DD, YYYY')}</Date>
        <Title>{post.title}</Title>
        {featuredImage ? <FeaturedImage src={featuredImage} /> : null}
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <Hr />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
        <Padding rhythm={2} />
        <ReactDisqusThread shortname="geniusgordon" />
      </Container>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
