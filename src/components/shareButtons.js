import React from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import './styles.css';

class ShareButtons extends React.Component {
	render() {
		return (
			<div>
				<FacebookShareButton url={this.props.url} className="soc-buttons">
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>

				<TwitterShareButton url={this.props.url} title={this.props.text} className="soc-buttons">
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
			</div>
		);
	}
}

export default ShareButtons;
