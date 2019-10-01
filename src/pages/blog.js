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

const NavLink = styled(Link)`
    text-decoration: none;
    margin-right: 15px;
    display: inline-block;
    position: relative;
    margin-right: 10px;

    border: solid black 2px;
    color: black;
    fill: black;
    background: white;
    box-shadow: 4px 4px 0 black;
    background-color: #cbc3ff;
    
    
    transition: top 0.2s ease;
    position: relative;
    top: 0;
    vertical-align: middle;
    cursor: pointer;
    text-transform: uppercase;
    font-family: inherit;
    font-weight: bold;
    margin: 0 4px;

    
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 40px;

    :hover {
        background-color: black;
        color: #cbc3ff;
        box-shadow: 4px 4px 0 #cbc3ff;
    }

   
`;

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
						<h2>{node.frontmatter.title} </h2>
						<div>
							<ArticleDate>{node.frontmatter.date}</ArticleDate>
							<ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
						</div>
						<p>{node.excerpt}</p>

						<NavLink
							to={node.frontmatter.path}
							css={css`
								text-decoration: none;
								color: inherit;
							`}
						>
							Read this post
						</NavLink>
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
