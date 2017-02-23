import React from 'react';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import styled from 'styled-components';
import ImageZoom from 'react-medium-image-zoom';
import ReactDisqusThread from 'react-disqus-thread';
import { rhythm, scale } from 'utils/typography';
import { preview, removeTags } from 'utils/preview';
import { config } from 'config';
import Bio from 'components/Bio';
import ReadNext from 'components/ReadNext';
import '../css/zenburn.css';

const Container = styled.div`
  padding: ${'0 ' + rhythm(0.75)};
`;

const Date = styled.div`
  font-size: ${scale(-0.2).fontSize};
  line-height: ${scale(-0.2).lineHeight};
  color: #878787;
`;

const Title = styled.h1`
  margin-top: 0;
  @media (max-width: 640px) {
    font-size: ${scale(0.8).fontSize};
    line-height: ${scale(0.8).lineHeight};
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
`;

const Hr = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const Padding = styled.div`
  width: 100%;
  margin-bottom: ${props => rhythm(props.rhythm || 1)};
`;

class MarkdownWrapper extends React.Component {
  // split html by <img>
  // and replace <img> with <ImageZoom />
  renderMarkdown(body) {
    const elements = [];
    let buffer = [];
    let isPre = false;
    body.split('\n').forEach((element, i) => {
      if (/^<pre>/.test(element)) {
        isPre = true;
      } else if (/<\/pre>$/.test(element)) {
        isPre = false;
      }
      if (!isPre && /<img/.test(element)) {
        elements.push(
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: buffer.join('\n') }}
          />,
        );
        if (element.match(/src="(.*?)"/)) {
          const src = element.match(/src="(.*?)"/)[1];
          const alt = element.match(/alt="(.*?)"/)
            ? element.match(/alt="(.*?)"/)[1]
            : '';
          elements.push(<ImageZoom key={`img-${i}`} image={{ src, alt }} />);
        }
        buffer = [];
      } else {
        buffer.push(element);
      }
    });
    elements.push(
      <div key="end" dangerouslySetInnerHTML={{ __html: buffer.join('\n') }} />,
    );
    return elements;
  }
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
    console.log(post.path, post.title);
    return (
      <Container className="markdown">
        <Helmet title={title} meta={meta} />
        <Date>{format(post.date, 'MMM DD, YYYY')}</Date>
        <Title>{post.title}</Title>
        {featuredImage ? <FeaturedImage src={featuredImage} /> : null}
        {this.renderMarkdown(post.body)}
        <Hr />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
        <Padding rhythm={2} />
        {process.env.NODE_ENV === 'development'
          ? null
          : <ReactDisqusThread
              shortname="geniusgordon"
              identifier={post.path}
              title={post.title}
            />}
      </Container>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
