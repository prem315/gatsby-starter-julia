// import { css } from 'emotion';
// // import styled from '@emotion/styled';
// import PropTypes from 'prop-types';
// import React from 'react';

// import FaTwitter from '../images/facebook.svg';
// import FaFacebook from '../images/facebook.svg';
// import FaGooglePlus from '../images/facebook.svg';

// // import FaTwitter from 'react-icons/lib/fa/twitter';
// // import FaFacebook from 'react-icons/lib/fa/facebook';
// // import FaGooglePlus from 'react-icons/lib/fa/google-plus';

// import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';

// const CustomReactShare = (props) => {
// 	const { url, title, excerpt } = props;
// 	console.log(url, title, excerpt);
// 	const customStyles = css`
// 		border-radius: 50% 0 50% 0;
// 		margin: 0 10px;
// 		flex-basis: 60px;
// 		height: 60px;
// 		flex-grow: 0;
// 	`;

// 	const shareBlockProps = {
// 		url: 'https://mywebsite.com/page-to-share/',
// 		button: ShareButtonRectangle,
// 		buttons: [
// 			{ network: 'Twitter', icon: FaTwitter },
// 			{ network: 'Facebook', icon: FaFacebook },
// 			{ network: 'GooglePlus', icon: FaGooglePlus }
// 		],
// 		text: 'asdasd',
// 		longtext: 'asdasdasdasfasfasfasfasfasfaf'
// 		// buttonCustomClassName: customStyles
// 	};

// 	console.log(shareBlockProps);

// 	//return <div>Facebook</div>;

// 	return <ShareBlockStandard {...shareBlockProps} />;
// };

// // CustomReactShare.PropTypes = {
// // 	url: PropTypes.string,
// // 	title: PropTypes.string,
// // 	excerpt: PropTypes.string
// // };

// // CustomReactShare.defaultProps = {
// // 	url: 'https://mywebsite.com/page-to-share/',
// // 	title: 'Default value of title',
// // 	excerpt: 'Default value of excerpt'
// // };

// export default CustomReactShare;
