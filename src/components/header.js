import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const Content = styled.div`
	max-width: 860px;
	padding: 1rem 1.0875rem;
	font-size: 1.2rem;
`;

// const NavLink = styled(Link)`
//   color: black;
//   margin-left: 15px;
//   text-decoration: none;
//   display: inline-block;
//   position: relative;

//   ::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     transform: scaleX(0);
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.8);
//     transform-origin: bottom right;
//     transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
//   }

//   :hover::after {
//     transform: scaleX(1);
//     transform-origin: bottom left;
//   }
// `;

const NavLink = styled(Link)`
    text-decoration: none;
    margin-right: 15px !important;
    display: inline-block;
    position: relative;
    margin-right: 10px;

    border: solid black 2px;
    color: black;
    fill: black;
    background: white;
    box-shadow: 4px 4px 0 black;
    background-color: #cbc3ff;
    
    border-radius: 5px;
    transition: top 0.2s ease;
    position: relative;
    top: 0;
    vertical-align: middle;
    cursor: pointer;
    text-transform: uppercase;
    font-family: inherit;
    font-weight: bold;
    margin: 0 4px;

    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;

    :hover {
        background-color: black;
        color: #cbc3ff;
        box-shadow: 4px 4px 0 #cbc3ff;
    }

   
`;

// const GitHubLink = styled.a`
// 	color: black;
// 	margin-left: 15px;
// 	text-decoration: none;
// 	display: inline-block;
// 	position: relative;

// 	::after {
// 		content: "";
// 		position: absolute;
// 		width: 100%;
// 		transform: scaleX(0);
// 		height: 2px;
// 		bottom: 0;
// 		left: 0;
// 		background-color: rgba(0, 0, 0, 0.8);
// 		transform-origin: bottom right;
// 		transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
// 	}

// 	:hover::after {
// 		transform: scaleX(1);
// 		transform-origin: bottom left;
// 	}
// `;

const HomeLink = styled(NavLink)`
  margin-left: 0;
  background-color: #CBC3FF;
  padding: 7px 5px 5px;
  font-family: jost-500
`;

const SiteHeader = styled.header`
	background: transparent;
	display: flex;
	margin-top: 50px;

	// align-content: center;
	// justify-content: center;
`;

const Header = ({ siteTitle }) => (
	<SiteHeader>
		<Content>
			<p>
				<NavLink
					to="/"
					activeStyle={{
						backgroundColor: 'black',
						color: '#cbc3ff',
						boxShadow: '4px 4px 0 #cbc3ff'
					}}
				>
					{siteTitle}
				</NavLink>
				{/* activeStyle={{ borderBottom: '2px solid' }} */}
				<NavLink
					to="/blog"
					activeStyle={{
						backgroundColor: 'black',
						color: '#cbc3ff',
						boxShadow: '4px 4px 0 #cbc3ff'
					}}
				>
					Blog
				</NavLink>
				{/* partiallyActive={true} */}
				<NavLink
					to="/projects"
					activeStyle={{
						backgroundColor: 'black',
						color: '#cbc3ff',
						boxShadow: '4px 4px 0 #cbc3ff'
					}}
				>
					Projects
				</NavLink>
				<NavLink href="https://github.com/prem315">GitHub</NavLink>
			</p>
		</Content>
	</SiteHeader>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
