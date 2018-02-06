import React, { Component } from 'react';
import { string, shape, arrayOf, func } from 'prop-types';

class Options extends Component {

	static propTypes = {
		fieldClass : string,
		title : string,
		name : string.isRequired,
		radioOptions : arrayOf(shape({
			label : string.isRequired,
			value : string.isRequired,
		})).isRequired,
		onUpdate : func.isRequired,
	};

	render() {
		const {
			fieldClass,
			title,
			radioOptions,
			name,
			onUpdate,
		} = this.props;
		return (
			<fieldset className={ fieldClass }>
				{ title ? <legend>{ title }</legend> : null }
				{
					radioOptions.map((opt) => {
						return (
							<label key={ `${opt.value}_${name}` }>
								<input
									onClick={ ({target}) => {
										onUpdate(target.value)
									} }
									type="radio"
									name={ name }
									value={ opt.value }
								/>{ opt.label }</label>
						);
					})
				}
			</fieldset>
		);
	}

}



export default Options;
