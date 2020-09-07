import React from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

export default function Comment({ postId, comments, isAuthenticated }) {
	return (
		<div>
			<h3>Comments</h3>
			<CommentForm postId={postId} comment={comments} />
			{!comments.length > 0 ? (
				<p>Be the first to comment your thought</p>
			) : (
				comments.map((comment) => (
					<CommentItem key={comment._id} comment={comment} postId={postId} />
				))
			)}
		</div>
	);
}
