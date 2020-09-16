import React from 'react';
import CommentCard from "../CommentCard";

const CommentList = (props) => (
 <div className="commentList">
	 {props.comments.map(commentItem => (
			<CommentCard
				author={commentItem.author}
				timestamp={commentItem.timestamp}
				content={commentItem.content}
			/>
  	))}
</div>

)

export default CommentList;