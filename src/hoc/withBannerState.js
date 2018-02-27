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
			url : null,
			shortenedUrl : null
		};

		getUrl = () => {
			const { url } = this.state;

			if (url) {
				fetch('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDea5uP9WFunTnECmoUGFi32BxxoHFckOQ', {
					method : 'POST',
					body : JSON.stringify({ "longUrl" : url }),
					headers : new Headers({
						'Content-Type' : 'application/json'
					})

				}).then(response => response.json()).then(jResp => {
					const { id } = jResp;

					if (id) {
						this.setState({
							shortenedUrl : id
						})

					}
				}).catch(err => console.warn(err))
			}
		};

		updateValue = ({ key, value }) => {
			const newOptions = {
				...this.state.options,
				[key] : value
			};

			let url = null;

			if (newOptions.icon !== '' && newOptions.color !== '' && newOptions.message !== '') {

				url = `${window.location.origin}/achieve/achievement/${encodeURIComponent(newOptions.icon)}/${encodeURIComponent(newOptions.color)}/${encodeURIComponent(newOptions.message)}`;

			}
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
					shortenedUrl={ this.state.shortenedUrl }
					updateValue={ this.updateValue }
					getUrl={ this.getUrl }
					selectedOptions={ this.state.options }
				/>
			);
		}

	}

};

export default withBannerState;
