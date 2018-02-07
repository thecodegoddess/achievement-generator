import React from 'react';
import { ICONS } from '../configs';

const BannerDisplay = ({ match }) => {
	const { icon, color, text } = match.params;
	const decodedColor = decodeURIComponent(color);
	const decodedText = decodeURIComponent(text);
	return (
		<div className="c-badge">
			<h1 className="c-badge__title">Achievement Unlocked</h1>
			<div className="c-badge__content" style={ {backgroundColor : decodedColor } }>
				<strong className="c-badge__icon">{ ICONS[icon] }</strong>
				<span className="c-badge__text">{ decodedText }</span>
				<strong className="c-badge__icon">{ ICONS[icon] }</strong>
			</div>
		</div>
	);

};

export default BannerDisplay;
