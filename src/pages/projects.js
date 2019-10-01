import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 1.45rem 1.0875rem;
`;

const Projects = ({ data }) => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Content>
				<h1>Projects</h1>
			</Content>
		</Layout>
	);
};

export default Projects;
