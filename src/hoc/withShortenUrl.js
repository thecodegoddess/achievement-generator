import React, { Component } from 'react';
import { shortenUrl } from '../utils/urls';

const withShortenUrl = (ComponentToWrap) => {

	return class extends Component {
		state = {
			shortUrl : ''
		};

		constructor(props) {
			super(props);
			shortenUrl(document.location.href).then((resp) => {
				console.log(resp);
				this.setState({ shortUrl : resp.id })
			})
		}

		render() {
			return (
				<ComponentToWrap
					{ ...this.props }
					shortUrl={ this.state.shortUrl }
				/>
			);
		}

	}

};

export default withShortenUrl;
