import React from 'react';
import Options from './Options'
import { COLORS, ICONS } from '../configs';

const CreateOne = () => {
	const iconOptions = Object.keys(ICONS).map((item) => {
		return {
			label : ICONS[item],
			value : item
		};
	});



	return (
		<main>
			<Options
				name="icons"
				fieldClass="test"
				title="Select an Icon"
				radioOptions={ iconOptions }
				onUpdate={ (val) => {
					console.log('value of icon is ', val)
				}}
			/>
		</main>
	)

}

export default CreateOne;
