import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { addComment } from '../../../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../assets/Alert';
import { Button } from '../../assets/Button';

const StyledCommentForm = styled.div`
	form {
		margin-top: 10px;
	}
	.form-group {
		display: flex;
		border: 0;
		align-items: center;
		border-radius: 5px;
		// background: #FCFCFC;

		img {
			border-radius: 50%;
			width: 35px;
			height: 35px;
		}
		textarea {
			font-family: inherit;
			background: #F7F7F7;
			width: 100%;
			outline: none:
			border-width:0px;
			border:0;
			resize: none;
			border-radius: 5px;
			margin: 0 5px;

			:focus {
				outline: none;
			}

			::placeholder {
				// color: #e74c3c;
				font-size: inherit;
				font-family: inherit;
				padding: 7px;
			}
			textarea::-moz-placeholder {
				padding: 10px;
			}
		}
	}
`;
function CommentForm({ postId }) {
	const [comment, setComment] = useState('');
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addComment(postId, { comment }));
		setComment('');
	};

	return (
		<StyledCommentForm>
			<Alert />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					{user ? (
						<Fragment>
							<img
								className="author-avatar"
								src={`/images/profile/${user.avatar}`}
								// src="https://source.unsplash.com/random/35x35"
								alt="author avatar"
							/>
						</Fragment>
					) : (
						<Fragment>
							<img
								className="author-avatar"
								src="https://source.unsplash.com/random/35x35"
								alt="author avatar"
							/>
						</Fragment>
					)}
					<textarea
						type=" text "
						name="comment"
						value={comment}
						autoComplete="off"
						placeholder="Write your comment here..."
						onChange={handleOnChange}
						required
					/>
					<Button> Post </Button>
				</div>
			</form>
		</StyledCommentForm>
	);
}
export default CommentForm;
