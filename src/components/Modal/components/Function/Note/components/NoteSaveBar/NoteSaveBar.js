import React from 'react';
import ContainedButton from '../../../../../../Style/Button/ContainedButton';
import Taskfollow from '../../../../../../Style/CheckBox';
import "./NoteSaveBar.scss"


const NoteSaveBar = ({
	children
	}) => (
		<div className="note-save-bar">
			<div className="note-save-bar__save">
				<ContainedButton>
					Save
				</ContainedButton>
			</div>
			<div className="note-save-bar__task-follow">
				<Taskfollow />
			</div>
		</div>
)


export default NoteSaveBar;