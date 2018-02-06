import React from 'react';
import { Link } from 'react-router-dom';
import Options from './Options'
import TextInput from './TextInput';

import withBannerState from '../hoc/withBannerState';

const CreateOne = ({ updateValue, colors, icons, url }) => {

	const iconOptions = Object.keys(icons).map((item) => {
		return {
			label : icons[item],
			value : item
		};
	});

	const colorOptions = Object.keys(colors).map((item) => {
		return {
			label : item,
			value : colors[item],
		}
	});


	return (
		<main>
			<pre>{ url }</pre>
			<Link to={ url }>Test Banner</Link>
			<Options
				name="icons"
				fieldClass="test"
				title="Select an Icon"
				radioOptions={ iconOptions }
				onUpdate={ (val) => {
					console.log('value of icon is ', val);
					updateValue({ key : 'icon', value : val});
				}}
			/>
			<Options
				title="Select a background color"
				name="colors"
				radioOptions={ colorOptions }
				onUpdate={ (val) => {
					console.log('value of icon is ', val);
					updateValue({ key : 'color', value : val});
				}}
			/>
			<TextInput
				title="Select the message to share"
				fieldClass="Something"
				name="message"
				onUpdate={ (val) => {
					console.log('value of icon is ', val);
					updateValue({ key : 'message', value : val});
				}}
			/>

		</main>
	)

}

export const Unwrapped = CreateOne;

export default withBannerState(CreateOne);
