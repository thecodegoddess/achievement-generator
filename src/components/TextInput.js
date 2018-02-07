import React,{ Component }  from 'react';
import { func, shape, arrayOf, string } from 'prop-types';

class TextInput extends Component {

	state = {
		value : '',
	};

	static propTypes = {
		classMod : string,
		title : string,
		name : string.isRequired,
		onUpdate : func.isRequired,
	};

	onChange = ({ target }) => {
		// debugger;
		console.log(target, target.value);
		// return
		this.setState({
			value : target.value
		});

		this.props.onUpdate(target.value);
	};

	render() {
		const {
			classMod,
			title,
			name,
		} = this.props;

		return (
			<fieldset className={ `o-field-options  o-field-options--${classMod}` }>
				{ title ? <legend className="o-field-options__legend">{ title }</legend> : null }
				<input
					className="o-field-options__input"
					value={ this.state.value }
					type="text"
					name={ name }
					onChange={ this.onChange }
				/>

			</fieldset>
		);

	}

}

export default TextInput;

