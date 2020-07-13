import React, { Fragment, useEffect } from 'react';
import { Main } from '../assets/Layout';
import UserPostCard from '../layout/post/UserPostCard';
import { getUserPosts } from '../../redux/actions/postActions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../layout/navigation/Header';
import Footer from '../layout/navigation/Footer';
import { Redirect } from 'react-router-dom';
const ProfileStyled = styled.div`
	display: grid;
	grid-gap: 10px;
	margin-bottom: 30px;
	grid-template-areas:
		'image-holder name'
		'image-holder bio';
	// 'image-holder social-container';
	// 'image-holder social-container';

	.image-holder {
		grid-area: image-holder;
	}
	img {
		border-radius: 100px;
		width: 150px;
		height: 150px;
	}
	.name {
		grid-area: name;
		display: flex;
		align-items: center;
		h1 {
			margin: 0 20px 0 0;
		}
	}
	.bio {
		grid-area: bio;
		// color: gray;
		margin: 0;
		font-weight: 300;
		margin-bottom: 10px;
		h5 {
			margin: 0 0 10px 0;
			font-size: 16px;
		}
	}
	.social-container {
		grid-area: social-container;
		display: flex;
		grid-columns: autofit;
		.social-count {
			margin-right: 50px;
		}
		.count {
			display: block;
			font-size: 24px;
			// color: gray;
			font-weight: 300;
		}
		.count-name {
			font-size: ;
			// color: gray;
		}
	}

	@media only screen and (max-width: 400px) {
		grid-gap: 5px;
		grid-template-areas:
			'image-holder name'
			'bio bio'
			'social-container social-container';

		.name {
			// grid-area: name;
			// display: flex;
			// align-items: center;
			h1 {
				margin: 0 20px 0 0;
				font-size: 20px;
			}
		}
		.bio {
			// grid-area: bio;
			// color: gray;
			// margin: 0;
			// font-weight: 300;
			font-size: 15px;

			h5 {
				// margin: 0 0 5px 0;
				font-size: 16px;
			}
		}

		img {
			// width: 70px;
			// height: 70px
		}
	}
`;
export default function Profile() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserPosts());
	}, [getUserPosts, dispatch]);

	const posts = useSelector((state) => state.post.userPosts);
	const user = useSelector((state) => state.auth.user);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	if (!isAuthenticated) return <Redirect to="/" />;
	return (
		<Fragment>
			<Header />
			<Main>
				<ProfileStyled>
					<div className="image-holder">
						{user.avatar ? (
							<Fragment>
								<img
									src={`/images/profile/${user.avatar}`}
									// src="https://source.unsplash.com/random/150x150"
									alt="profile avatar"
								/>
							</Fragment>
						) : (
							<Fragment>
								<img
									src="https://source.unsplash.com/random/150x150"
									alt="profile avatar"
								/>
							</Fragment>
						)}
					</div>
					<div className="name">
						<h1>{user.name}</h1>
						<i class="fas fa-cog"></i>
					</div>
					<p className="bio">
						<h5>Bio</h5>
						Kind of a good samaritan, terrible athlete, but extremely blessed in
						the napping skills department.
					</p>
					{/* <div className="social-container">
						<div className="social-count">
							<span className="count">10K</span>
							<span className="count-name"> 100k Followers</span>
						</div>
						<div className="social-count">
							<span className="count">0</span>
							<span className="count-name">100K Fellowing</span>
						</div>
					</div> */}
				</ProfileStyled>
				{posts.length < 0 ? (
					<Fragment>
						<p>
							You have written <b>{posts.length} post</b>
						</p>
					</Fragment>
				) : (
					<Fragment>
						<p>
							You have written <b>{posts.length} posts</b>
						</p>
						<section>
							{posts.map((post) => (
								<UserPostCard post={post} />
							))}
						</section>
					</Fragment>
				)}
			</Main>
			<Footer />
		</Fragment>
	);
}
