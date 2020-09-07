import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import Moment from 'react-moment';
import moment from 'moment';
import StyledLink from '../../assets/StyledLink';
import { Button } from '../../assets/Button';

export const StyledPostCard = styled.section`
	text-align: justify;
	border-bottom: 1px solid #e6e6e6;
	.post-card-wrapper {
		display: grid;
		margin: 30px 0;
		grid-template-areas:
			'post-avatar post-title'
			'post-avatar post-social'
			'post-avatar post-summary'
			'post-avatar delete-edit';
	}
	
		.post-thumbnail {
			grid-area: post-avatar;
			margin-right: 10px;
			width: 170px;
			border-radius: 5px;
			height: 170px;
		}
		
		.post-cat {
			grid-area: post-cat;
			color: #2196F3;
			font-size: 12px;
		}
		.post-title {
			grid-area: post-title;
			margin: 0;
			// color: #03a9f4
		}

		img {
			vertical-align: bottom;
			margin-right: 5px;
			width: 20px;
 		   	height: 20px;
    		border-radius: 30px;
		}
		.post-author {
			font-size: 12px;
			margin-right: 21px;
		}
		.post-summary {
			grid-area: post-summary;
			font-size: 13px;
			font-weight: 300;
		}
		.post-social {
			align-items: center;
			margin: 12px 0;
			display: flex;
		}
		time {
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
			height: 124px;
		}
		.post-summary {
			display: none;  
		}

		time {
			float: left;
			place-items: center;
		}
		.post-author {
			place-items: center;
		}
	}
`;

const ProfilePostCardButton = styled(Button)`
	border: 1px solid #c1c1c1;
`;

export function PostCard({ post }) {
	const time = moment(post.date).startOf('day').fromNow();
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
					<h4 className="post-title">
						<StyledLink to={`/posts/${post._id}`}>{post.title}</StyledLink>
					</h4>
					<div className="post-social">
						<img
							className="post-author-avatar"
							src={`/images/profile/${post.avatar}`}
							alt="post author avatar"
						/>
						<span className="post-author">
							{post.author} -{time}
						</span>
						<small className="post-cat">{post.category}</small>
					</div>
					<summary className="post-summary">
						<StyledLink to={`/posts/${post._id}`}>{post.summary}</StyledLink>
					</summary>
				</div>
			</StyledPostCard>
		</Fragment>
	);
}
