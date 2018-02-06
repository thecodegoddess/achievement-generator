import React,{ Component } from 'react';
import { COLORS, ICONS } from '../configs';

const withBannerState = (ComponentToWrap) => {

	return class extends Component {

		state = {
			options : {
				icon : '',
				color : '',
				message : '',
			},
			url : '',
		};

		updateValue = ({ key, value }) => {
			const newOptions = {
				...this.state.options,
				[key] : value
			};

			const url = `/achievement/${encodeURIComponent(newOptions.icon)}/${encodeURIComponent(newOptions.color)}/${encodeURIComponent(newOptions.message)}`;
			this.setState({
				options : newOptions,
				url,
			});
		};

		render() {
			return (
				<ComponentToWrap
					colors={ COLORS }
					icons={ ICONS }
					{ ...this.props }
					url={ this.state.url }
					updateValue={ this.updateValue }
				/>
			);
		}

	}

};

export default withBannerState;
