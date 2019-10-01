import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Layout from '../components/layout';
import poem1 from '../images/poem1.png';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	// padding: 1.45rem 1.0875rem;
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

const IMG = styled.img`
	width: 40%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CodePoetry = ({ data }) => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Content>
				<NameHeader>
					Code <Name>Poetry</Name> 🎨{' '}
				</NameHeader>
				<Description>Here are some of the projects i have worked on and prowd of.</Description>
				<hr style={{ borderTop: '1px solid #cbc3ff' }} />
				<h2>Code Poem 1</h2>
				<IMG src={poem1} />
			</Content>
		</Layout>
	);
};

export default CodePoetry;
