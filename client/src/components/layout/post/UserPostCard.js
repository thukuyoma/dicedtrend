import React, { Fragment } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import moment from 'moment';
import StyledLink from '../../assets/StyledLink';
import { Button } from '../../assets/Button';
import { deleteUserPost } from '../../../redux/actions/postActions';
import { useDispatch } from 'react-redux';

export const StyledPostCard = styled.section`
	.post-card-wrapper {
		display: grid;
		margin: 30px 0;
		grid-template-areas:
			'post-avatar post-cat'
			'post-avatar post-title'
			'post-avatar post-social'
			'post-avatar delete-edit';
	}
		.post-thumbnail {
			grid-area: post-avatar;
			margin-right: 10px;
			width: 130px;
			border-radius: 5px;
			height: 130px;
		}
		
		.post-cat {
			grid-area: post-cat;
			color: #e74c3c;
		}
		.post-title {
			grid-area: post-title;
			margin: 0;
		}
		.delete-edit {
			grid-area: delete-edit;
			display: flex;
			.delete-post {
				margin-right: 20px;
			}
			.far {
				margin-right: 5px;
			}
		}
		.post-social {
			align-items: center;
			margin-bottom: 5px;
		}
		time {
			// font-weight: 200;
			font-size: 12px;
			margin-right: 30px;
		}
	}
	@media (min-width: 320px) and (max-width: 600px) {
		.post-title {
			font-size: 13px;
			width: 2fr;
		}
		.post-cat {
			font-size: 10px;
		}
		.post-thumbnail {
			width: 124px;
			height: 112px;
		}
	
		time {
			float: left;
			place-items: center;
		}
	}
`;

const ProfilePostCardButton = styled(Button)`
	border: 1px solid #c1c1c1;
}
`;

export default function PostCard({ post }) {
	const dispatch = useDispatch();
	const onDelete = () => {
		dispatch(deleteUserPost(post._id));
	};
	return (
		<Fragment>
			<StyledPostCard profile>
				<div className="post-card-wrapper">
					<div className="post-thumbnail">
						<StyledLink to={`/posts/${post._id}`}>
							<img
								className="post-thumbnail"
								src={`/images/posts/${post.photos}`}
								// src="https://source.unsplash.com/random/207x227"
								alt="Post thumbnail holder"
							/>
						</StyledLink>
					</div>
					<small className="post-cat">{post.category}</small>
					<h4 className="post-title">
						<StyledLink to={`/posts/${post._id}`}>{post.title}</StyledLink>
					</h4>
					<div className="post-social">
						<time>
							<Moment format="Do MMM  YY">{moment.utc(post.date)}</Moment>
						</time>
					</div>

					<div className="delete-edit">
						<span className="delete-post">
							<ProfilePostCardButton primary onClick={onDelete}>
								Delete
							</ProfilePostCardButton>
						</span>
						<span className="edit-post">
							<StyledLink
								to={{
									pathname: `/edit-post/${post._id}`,
									state: { ...post },
								}}
							>
								<ProfilePostCardButton primary>Edit</ProfilePostCardButton>
							</StyledLink>
						</span>
					</div>
				</div>
			</StyledPostCard>
		</Fragment>
	);
}
