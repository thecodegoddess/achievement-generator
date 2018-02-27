import React from 'react';
import Options from './Options'
import TextInput from './TextInput';
import BannerDisplay from './BannerDisplay';
import withBannerState from '../hoc/withBannerState';



const CreateOne = ({ resetUrl, updateValue, colors, icons, getUrl, shortenedUrl, url, selectedOptions }) => {

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
			<Options
				name="icons"
				classMod="icons"
				title="Select an Icon"
				radioOptions={ iconOptions }
				onUpdate={ (val) => {
					updateValue({ key : 'icon', value : val});
				}}
			/>
			<Options
				title="Select a background color"
				name="colors"
				classMod="colors"
				radioOptions={ colorOptions }
				onUpdate={ (val) => {
					updateValue({ key : 'color', value : val});
				}}
			/>
			<TextInput
				title="Select the message to share"
				classMod="text"
				name="message"
				onUpdate={ (val) => {
					updateValue({ key : 'message', value : val});
				}}
			/>
			{ url !== null ? <div>
				<button
					className="o-btn"
					onClick={ getUrl }>Get Url and Preview</button>
				<p>Achievement banner url: { shortenedUrl !== null ? <a href={ shortenedUrl }>{ shortenedUrl }</a> : null }</p>
				<div style={ {maxWidth : '800px', margin : '2px auto'} }>
					{ shortenedUrl !== null ? <BannerDisplay match={ { params : {...selectedOptions, text : selectedOptions.message } } } /> : null }
				</div>
			</div> : null }

		</main>
	)

}

export const Unwrapped = CreateOne;

export default withBannerState(CreateOne);
