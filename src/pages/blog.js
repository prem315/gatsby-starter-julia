import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
`;

const ArticleDate = styled.h5`
	display: inline;
	color: #606060;
	margin-bottom: 10px;
`;

const MarkerHeader = styled.h3`
	display: inline;
	border-radius: 1em 0 1em 0;
	margin-bottom: 10px;
`;

const ReadingTime = styled.h5`
	display: inline;
	color: #606060;
	margin-bottom: 10px;
`;

const NameHeader = styled.h1`
	font-size: 3.5rem;
	margin-bottom: 30px;
`;

const Description = styled.p`
	padding: 0;
	margin-bottom: 1rem;
	font-size: 1.4rem;
	margin-bottom: 20px;
	line-height: 2rem;
`;

const Name = styled.span`color: #cbc3ff;`;

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Content>
				<NameHeader>
					Blog <Name>Posts</Name> 📖
				</NameHeader>
				<Description>Here are some of the blog posts i have written.</Description>
				<hr style={{ borderTop: '1px solid #cbc3ff' }} />
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id}>
						<Link
							to={node.frontmatter.path}
							css={css`
								text-decoration: none;
								color: inherit;
							`}
						>
							<MarkerHeader>{node.frontmatter.title} </MarkerHeader>
							<div>
								<ArticleDate>{node.frontmatter.date}</ArticleDate>
								<ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
							</div>
							<p>{node.excerpt}</p>
						</Link>
					</div>
				))}
			</Content>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						path
					}
					fields {
						slug
						readingTime {
							text
						}
					}
					excerpt
				}
			}
		}
	}
`;
