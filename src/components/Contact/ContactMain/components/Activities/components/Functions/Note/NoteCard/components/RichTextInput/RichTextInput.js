import React from 'react';
import './RichTextInput.scss';

const RichTextInput = (props) => (
	<div className="rich-text-input">
		<textarea
			placeholder={props.placeholder}
			rows="3"
		>
			{props.content}
		</textarea>
	</div>
);

// class RichTextInput extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return(
// 			<textarea
// 				className="rich-text-input"
// 				placeholder={this.props.placeholder}
// 				rows="3"
// 			>
// 				{this.props.content}
// 		</textarea>
// 		);
// 	}
// };


export default RichTextInput;