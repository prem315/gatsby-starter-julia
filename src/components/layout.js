/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Header from './header';
import './layout.css';

const Content = styled.div`
	// margin: 0 auto;
	max-width: 860px;
	padding: 0 1.0875rem 1rem;
	padding-top: 0;
`;

const GatsbyLink = styled.a`margin-left: 5px;`;

const Footer = styled.footer`
	display: flex;
	margin-top: 50px;
	// justify-content: center;
`;

const HR = styled.hr`
	border-top: 1px solid #cbc3ff;
	margin-top: 40px;
`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<React.Fragment>
				<Header siteTitle={data.site.siteMetadata.title} />
				<Content>
					<main>{children}</main>
					<Footer>
						<h4>© {new Date().getFullYear()}, Built with</h4>
						{` `}
						<GatsbyLink href="https://www.gatsbyjs.org">
							<h4>Gatsby</h4>
						</GatsbyLink>
					</Footer>
				</Content>
			</React.Fragment>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
