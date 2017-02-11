import React from 'react';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import styled from 'styled-components';
import { rhythm, scale } from 'utils/typography';
import { config } from 'config';
import Bio from 'components/Bio';
import ReadNext from 'components/ReadNext';
import '../css/zenburn.css';

const PostDate = styled.div`
  font-size: ${() => scale(-0.2).fontSize};
  line-height: ${() => scale(-0.2).lineHeight};
  color: #878787;
`;

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div className="markdown">
        <Helmet title={`${post.title} | ${config.blogTitle}`} />
        <PostDate>{format(post.date, 'MMM DD, YYYY')}</PostDate>
        <h1 style={{ marginTop: 0 }}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <hr style={{ marginBottom: rhythm(2) }} />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
