import React from 'react';
import './RichTextInput.scss';

const RichTextInput = (props) => (
	<div className="rich-text-input">
		<textarea
			placeholder={props.placeholder}
			rows="5"
		>
			{props.content}
		</textarea>
	</div>
);

export default RichTextInput;