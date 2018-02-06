import React,{ Component }  from 'react';
import { func, shape, arrayOf, string } from 'prop-types';

class TextInput extends Component {

	state = {
		value : '',
	};

	static propTypes = {
		fieldClass : string,
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
			fieldClass,
			title,
			name,
		} = this.props;

		return (
			<fieldset className={ fieldClass }>
				{ title ? <legend>{ title }</legend> : null }
				<input
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

