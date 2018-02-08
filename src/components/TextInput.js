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
		this.setState({
			value : target.value
		});

		this.props.onUpdate(target.value);
	};

	clear = () => {
		this.setState({
			value : ''
		});
		this.props.onUpdate('');
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
				<div className="o-text-field-single">
					<input
						className="o-field-options__input o-text-field-single__input"
						value={ this.state.value }
						type="text"
						name={ name }
						onChange={ this.onChange }
					/>
					<button
					className="o-text-field-single__btn"
						onClick={ this.clear }
					>X</button>

				</div>

			</fieldset>
		);

	}

}

export default TextInput;

