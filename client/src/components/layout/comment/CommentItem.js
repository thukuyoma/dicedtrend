import React, { Fragment } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment } from '../../../redux/actions/postActions';

const StyledCommentItem = styled.div`
	border-radius: 5px;
	margin-top: 10px;
	.social-holder {
		display: flex;
		padding-bottom: 5px;
		margin-top: 20px;c
	}
	.comment {
		font-size: 13px;
		font-weight: 300;
	}
	.comment-author-avatar {
		border-radius: 15px;
		height: 15px;
		margin: 0 5px 0 0;
	}
	.comment-author {
		font-size: 10px;
		margin: 0 3px;
		font-weight: bold;
	}
	time {
		font-size: 10px;
		// margin: 0 5px;
	}
	.edit-comment,
	.delete-comment {
		font-size: 10px;
		margin-left: 10px;
	}
`;

export default function CommentItem({
	postId,
	comment: { date, text, name, _id, user, avatar },
}) {
	const commentPoster = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const onDelete = () => {
		dispatch(deleteComment(postId, _id));
	};
	return (
		<Fragment>
			<StyledCommentItem>
				<div>
					<div className="social-holder">
						{/* <ion-icon name="heart-circle-outline"></ion-icon> */}
						<img
							className="comment-author-avatar"
							src={`/images/profile/${avatar}`}
							alt="author avatar"
						/>
						<span className="comment-author">{name}</span>
						<time>
							<Moment fromNow>{date}</Moment>
						</time>
						{commentPoster._id === user && (
							<Fragment>
								<span className="delete-comment" onClick={onDelete}>
									<i class="far fa-trash-alt"></i>
								</span>
							</Fragment>
						)}
					</div>
					<div className="comment">{text}</div>
				</div>
			</StyledCommentItem>
		</Fragment>
	);
}
