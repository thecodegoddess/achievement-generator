import React, { Component } from 'react';
import { string, shape, arrayOf, func } from 'prop-types';

class Options extends Component {

	static propTypes = {
		classMod : string,
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
			classMod,
			title,
			radioOptions,
			name,
			onUpdate,
		} = this.props;
		return (
			<fieldset className={ `o-field-options  o-field-options--${classMod}` }>
				{ title ? <legend className="o-field-options__legend">{ title }</legend> : null }
				{
					radioOptions.map((opt) => {
						return (
							<label
								data-value={ opt.value }
								className="o-field-options__label"
								key={ `${opt.value}_${name}` }
							>
								<input
									className="o-field-options__input"
									onClick={ ({target}) => {
										onUpdate(target.value)
									} }
									type="radio"
									name={ name }
									value={ opt.value }
								/>{ opt.label.toLowerCase() }</label>
						);
					})
				}
			</fieldset>
		);
	}

}



export default Options;
