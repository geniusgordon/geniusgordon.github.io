import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm, scale } from 'utils/typography';
import { config } from 'config';
import styled from 'styled-components';
import Bio from 'components/Bio';
import 'css/base.css';

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

const IndexHeader = styled.div`
  width: 100%;
  padding-left: ${rhythm(0.5)};
  padding-right: ${rhythm(0.5)};
  padding-top: ${rhythm(1.5)};
  background-color: white;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,.05);
  margin-bottom: ${rhythm(2)};
`;

const Navbar = styled.div`
  background-color: white;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,.05);
  margin-bottom: ${rhythm(2)};
`;

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: ${rhythm(0.5)};
`;

const H3 = styled.h3`
  padding: ${rhythm(0.5)};
  font-family: Montserrat, sans-serif;
  margin: 0;
`;

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === prefixLink('/')) {
      header = (
        <IndexHeader>
          <Container>
            <H1>
              <HeaderLink>{config.blogTitle}</HeaderLink>
            </H1>
            <Bio />
          </Container>
        </IndexHeader>
      );
    } else {
      header = (
        <Navbar>
          <H3>
            <HeaderLink to={prefixLink('/')}>
              {config.blogTitle}
            </HeaderLink>
          </H3>
        </Navbar>
      );
    }
    return (
      <Base>
        {header}
        <Container>
          {children}
        </Container>
      </Base>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
