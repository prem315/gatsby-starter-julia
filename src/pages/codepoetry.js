import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Layout from '../components/layout';

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
			</Content>
		</Layout>
	);
};

export default CodePoetry;
