import React, { useEffect, Fragment } from 'react';
import { getSinglePost } from '../../redux/actions/postActions';
import { Main } from '../assets/Layout';
import Moment from 'react-moment';
import Header from '../layout/navigation/Header';
import Footer from '../layout/navigation/Footer';

import styled from 'styled-components';
import Comment from '../layout/comment/Comment';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../assets/Spinner';

const Article = styled.section`
	display: grid;
	grid-gap: 10px;

	.cat-time {
		font-size: 12px;
		font-weight: 500;
		.cat {
			margin-right: 30px;
			color: red;
			font-size: 15px;
		}
	}
	.title {
		margin: 5px 0 5px 0;
	}
	.author-holder {
		display: flex;
		align-items: center;
		.author-avatar {
			border-radius: 50%;
			margin-right: 5px;
			height: 25px;
			width: 25px;
		}
		.author {
			font-size: 12px;
			// font-weight: 200;
		}
	}
	.socials {
		display: flex;
		align-items: center;
		margin-right: 15px;
	}

	.social-count {
		margin-left: 5px;
	}
	.thumbnail {
		width: 100%;
		border-radius: 5px;
		width: 580px;
		height: 331px;
	}
	.social-holder {
		display: flex;
	}
	article {
		font-weight: 300;
		line-height: 32px;
		text-align: justify;
		letter-spacing: -0.003em;
	}

	@media (min-width: 320px) and (max-width: 600px) {
		.thumbnail {
			width: 100%;
			height: 100%;
		}
	}
`;
function Post({ match }) {
	const dispatch = useDispatch();
	const id = match.params.id;
	const post = useSelector((state) => state.post.post);
	const isLoading = useSelector((state) => state.post.loading);
	useEffect(() => {
		dispatch(getSinglePost(id));
	}, [id, dispatch]);

	return (
		<Fragment>
			<Header />
			<Main>
				<div>
					{isLoading || post === null ? (
						<Spinner />
					) : (
						<Article>
							<div className="cat-time">
								<span className="cat">{post.category}</span>
								<time>
									<Moment format="Do MM YY">{post.date}</Moment>{' '}
								</time>
							</div>
							<h1 className="title">{post.title}</h1>
							<div className="author-holder">
								<img
									className="author-avatar"
									src={`/images/posts/${post.photos}`}
									// src="https://source.unsplash.com/random/25x25"
									alt="author avatar"
								/>
								<span className="author">{post.author}</span>
							</div>
							<div className="thumbnail">
								<img
									className="thumbnail"
									// src="https://source.unsplash.com/random/580x331"
									src={`/images/posts/${post.photos}`}
									alt="post thrumbnail"
								/>
							</div>
							<article>{post.article}</article>
							<Comment comments={post.comments} postId={post._id} />
						</Article>
					)}
				</div>
			</Main>
			<Footer />
		</Fragment>
	);
}

export default Post;
