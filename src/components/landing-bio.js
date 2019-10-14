import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Container = styled.div`// text-align: center;`;

const OuterContainer = styled.div`
	//   display: flex;
	//   align-items: center;
	//   justify-content: center;
	//   flex-direction: row;
	//   height: 78vh;
`;

const Description = styled.p`
	padding: 0;
	margin-bottom: 1rem;
	font-size: 1.4rem;
	margin-bottom: 20px;
	line-height: 2rem;
`;

const NameHeader = styled.h1`
	font-size: 3.5rem;
	margin-bottom: 30px;
`;

const Name = styled.span`color: #cbc3ff;`;

const ImpSpan = styled.a`
	border-bottom: 2px solid #cbc3ff;
	text-decoration: none;

	background-size: 200% 200%;
	background-image: linear-gradient(to top, #cbc3ff 50%, transparent 50%);
	-webkit-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
	-moz-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
	-ms-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
	-o-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
	transition: background-position 300ms, color 300ms ease, border-color 300ms ease;

	:hover {
		background-position: top right;
		color: #fff;
		border-color: #cbc3ff;
		background-image: linear-gradient(to top, #cbc3ff 51%, transparent 50%);
		background-position: 0 100%;
		-webkit-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
		-moz-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
		-ms-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
		-o-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
		transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
		cursor: pointer;
	}
`;

const Button = styled.button`
	border: solid #cbc3ff 2px;
	color: #cbc3ff;
	fill: #cbc3ff;
	background: white;
	box-shadow: 4px 4px 0 #cbc3ff;
	height: 40px;

	transition: top 0.2s ease;
	position: relative;
	top: 0;
	vertical-align: middle;
	cursor: pointer;
	text-transform: uppercase;
	font-family: inherit;
	font-weight: bold;
	margin: 0 4px;

	.box:active {
		top: 4px;
		box-shadow: none;
	}
`;

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
    font-family: jost;
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

const LandingBio = () => (
	<StaticQuery
		query={graphql`
			query LandingSiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<OuterContainer>
				<Container>
					<NameHeader>
						Hi, I'm <Name>{data.site.siteMetadata.title} 🤵 </Name>
					</NameHeader>
					<Description>
						I'm a Software Engineer at <ImpSpan href="http://poispay.com/">poispay.com</ImpSpan>, currently
						focused on front-end web development. I live in Ahmedabad, GJ.
					</Description>
					<Description>
						I write these uniue snippets of code which translates into poetry, which i call my code poetry.
						I also like to strike conversation about science and philosophy. When i am not working, i spend
						time to learn new things, write tech articles, contribute to opensource. On Sunday you find me
						running in the park.
					</Description>
					<Description>
						Chec kout my blog posts here. 👉
						<NavLink to="/blog">Blog</NavLink>
					</Description>
				</Container>
			</OuterContainer>
		)}
	/>
);

NameHeader.propTypes = {
	siteTitle: PropTypes.string
};

NameHeader.defaultProps = {
	siteTitle: ``
};

export default LandingBio;
