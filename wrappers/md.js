import React from 'react';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import styled from 'styled-components';
import { rhythm, scale } from 'utils/typography';
import { preview, removeTags } from 'utils/preview';
import { config } from 'config';
import Bio from 'components/Bio';
import ReadNext from 'components/ReadNext';
import '../css/zenburn.css';

const Container = styled.div`
  padding: ${() => '0 ' + rhythm(0.75)};
`;

const PostDate = styled.div`
  font-size: ${() => scale(-0.2).fontSize};
  line-height: ${() => scale(-0.2).lineHeight};
  color: #878787;
`;

const FeaturedImage = styled.img`
  width: 100%;
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
        <PostDate>{format(post.date, 'MMM DD, YYYY')}</PostDate>
        <h1 style={{ marginTop: 0 }}>{post.title}</h1>
        {featuredImage ? <FeaturedImage src={featuredImage} /> : null}
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <hr style={{ marginBottom: rhythm(2) }} />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </Container>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
