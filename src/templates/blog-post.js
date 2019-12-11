import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
// import get from 'lodash/get';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import CustomReactShare from '../components/CustomShareBlock';
import ShareButtons from '../components/shareButtons';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
`;

const MarkedHeader = styled.h1`
	display: inline;
	border-radius: 1em 0 1em 0;
`;

const HeaderDate = styled.h3`
	margin-top: 10px;
	color: #606060;
`;

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
	a {
		text-decoration: none;
		position: relative;
	}

	a::after {
		content: "";
		position: absolute;
		z-index: -1;
		top: 70%;
		left: -0.1px;
		right: -0.1px;
		bottom: 0;
		transition: top 0.1s ease-in-out;
		background-color: rgba(255, 250, 150, 0.8);
	}

	a:hover::after {
		top: 0;
	}
`;

// export default ({ data }) => {
// 	const post = data.markdownRemark;

// 	const excerpt = data.markdownRemark.excerpt; //get(data, 'data.excerpt');
// 	console.log(excerpt);
// 	const mywebsiteurl = 'https://helloprem.netlify.com';
// 	const url = `${mywebsiteurl}/${data.markdownRemark.frontmatter.path}`;
// 	return (
// 		<Layout>
// 			<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
// 			<Content>
// 				<MarkedHeader>{post.frontmatter.title}</MarkedHeader>
// 				<HeaderDate>
// 					{post.frontmatter.date} - {post.fields.readingTime.text}
// 				</HeaderDate>
// 				<MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
// 			</Content>
// 			<CustomReactShare title={post.frontmatter.title} excerpt={excerpt} url={url} />
// 		</Layout>
// 	);
// };

export default class BlogPostTemplate extends React.Component {
	render() {
		console.log(this.props);
		const post = this.props.data.markdownRemark;
		const excerpt = this.props.data.markdownRemark.excerpt; //get(data, 'data.excerpt');

		const mywebsiteurl = 'https://helloprem.netlify.com';
		const url = `${mywebsiteurl}/${this.props.data.markdownRemark.frontmatter.path}`;
		return (
			<Layout>
				<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
				<Content>
					<MarkedHeader>{post.frontmatter.title}</MarkedHeader>
					<HeaderDate>
						{post.frontmatter.date} - {post.fields.readingTime.text}
					</HeaderDate>
					<MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
				</Content>
				{/* <CustomReactShare title={post.frontmatter.title} excerpt={excerpt} url={url} /> */}
				<ShareButtons url={url} />
			</Layout>
		);
	}
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			excerpt(pruneLength: 160)
			frontmatter {
				date(formatString: "DD MMMM, YYYY")
				path
				title
			}
			fields {
				readingTime {
					text
				}
			}
		}
	}
`;
