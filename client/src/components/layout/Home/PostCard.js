import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import authorAvatar from '../../../images/authorAvatar.png';
import Moment from 'react-moment';
import moment from 'moment';
import StyledLink from '../../assets/StyledLink';
import { Button } from '../../assets/Button';

export const StyledPostCard = styled.section`
	z-index: -9;
	.post-card-wrapper {
		display: grid;
		margin: 30px 0;
		// grid-template-columns: repeat(auto-fit, minmax(304, 1fr));
		grid-template-areas:
			'post-avatar post-cat'
			'post-avatar post-title'
			'post-avatar post-social'
			'post-avatar post-summary'
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
		img {
			vertical-align: bottom;
			margin-right: 8px;
			width: 20px;
 		   height: 20px;
    		border-radius: 30px;
		}
		.post-author {
			font-size: 12px;
			margin-right: 21px;
			// font-weight: 300;
		}
		.post-summary {
			grid-area: post-summary;
			font-size: 13px;
			font-weight: 300;
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
		.post-summary {
			display: none;  
		}

		time {
			float: left;
			place-items: center;
		}
		.post-author {
			// margin-right: 50px;
			place-items: center;
		}
	}
	
	${(props) =>
		props.profile &&
		css`
			.post-author-avatar,
			.post-author,
			.post-summary {
				display: none;
			}

			@media (min-width: 320px) and (max-width: 600px) {
				.post-thumbnail {
					width: 124px;
					height: 134px;
				}
			}
			height: 134px;
		`};

	${(props) =>
		props.home &&
		css`
			.delete-edit {
				display: none;
			}
		`};

`;

const ProfilePostCardButton = styled(Button)`
	border: 1px solid #c1c1c1;
`;

export function PostCard({ post }) {
	return (
		<Fragment>
			<StyledPostCard home>
				<div className="post-card-wrapper">
					<div className="post-thumbnail">
						<StyledLink to={`/posts/${post._id}`}>
							<img
								className="post-thumbnail"
								src={`/images/posts/${post.photos}`}
								alt="Post thumbnail holder"
							/>
						</StyledLink>
					</div>
					<small className="post-cat">{post.category}</small>
					<h4 className="post-title">
						<StyledLink to={`/posts/${post._id}`}>{post.title}</StyledLink>
					</h4>
					<div className="post-social">
						<img
							className="post-author-avatar"
							src={`/images/profile/${post.avatar}`}
							alt="post author avatar"
						/>
						<span className="post-author"> {post.author}</span>
						<time>
							<Moment format="Do MMM  YY">{moment.utc(post.date)}</Moment>
						</time>
					</div>
					<summary className="post-summary">
						<StyledLink to={`/posts/${post._id}`}>{post.summary}</StyledLink>
					</summary>
					<div className="delete-edit">
						<span className="delete-post">
							<ProfilePostCardButton primary>
								{/* <i class="far fa-trash-alt"></i> */}
								Delete
							</ProfilePostCardButton>
						</span>
						<span className="edit-post">
							<ProfilePostCardButton primary>
								{/* <i class="far fa-edit"></i> */}
								Edit
							</ProfilePostCardButton>
						</span>
					</div>
				</div>
			</StyledPostCard>
		</Fragment>
	);
}
