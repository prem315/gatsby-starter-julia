import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Layout from '../components/layout';
import reactredux from '../images/react-redux.png';

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

const HR = styled.hr`
	border-top: 1px solid #cbc3ff;
	margin-bottom: 40px;
`;

const Name = styled.span`color: #cbc3ff;`;

const IMG = styled.img`
	width: 70%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SourceCode = styled.a`
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

	:hover {
		background-color: black;
		color: #cbc3ff;
		box-shadow: 4px 4px 0 #cbc3ff;
	}
`;

const Projects = ({ data }) => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Content>
				<NameHeader>
					Portfolio <Name>Projects</Name> 👇{' '}
				</NameHeader>
				<Description>Here are some of the projects i have worked on and prowd of.</Description>
				<HR />
				<h2>React Redux Bolierplate</h2>
				<IMG src={reactredux} />
				<Description>This project was bootstrapped with Create React App.</Description>
				<SourceCode href="https://github.com/prem315/react-redux-boilerplate" target="_blank">
					Source Code
				</SourceCode>
			</Content>
		</Layout>
	);
};

export default Projects;
