import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeroSide = styled.div`
	width: 200px;
	.hero-side-post {
		display: grid;
		margin-bottom: 10px;
		grid-template-columns: repeat(autofill, 1fr);
		grid-template-areas:
			'post-thumbnail  post-title'
			'post-thumbnail timestamp';
	}

	.post-thumbnail {
		grid-area: post-thumbnail;
		margin-right: 10px;
		grid-column: span 1;
		border-radius: 5px;
		width: 80px;
		height: 80px;
	}

	.post-title {
		grid-area: post-title;
		margin: 0;
		font-size: 14px;
		// font-weight: 400;
	}

	.timestamp {
		grid-area: timestamp;
		font-size: 10px;
		color: #2196f3;
		font-weight: 100px;
		display: none;
	}
`;
export default function PopularPost() {
	return (
		<Fragment>
			<StyledHeroSide>
				<div className="hero-side">
					<div className="hero-side-post">
						<img
							className="post-thumbnail"
							src="https://source.unsplash.com/random/125x110"
							alt="podt thumbnail"
						/>
						<h4 className="post-title">
							The impact of the pandemic and lockdown demands
						</h4>
						<time className="timestamp">-May 24, 2018</time>
					</div>
				</div>
				<div className="hero-side">
					<div className="hero-side-post">
						<img
							className="post-thumbnail"
							src="https://source.unsplash.com/random/125x110"
							alt="podt thumbnail"
						/>
						<h4 className="post-title">
							The impact of the pandemic and lockdown demands
						</h4>
						<time className="timestamp">-May 24, 2018</time>
					</div>
				</div>
				<div className="hero-side">
					<div className="hero-side-post">
						<img
							className="post-thumbnail"
							src="https://source.unsplash.com/random/125x110"
							alt="podt thumbnail"
						/>
						<h4 className="post-title">
							The impact of the pandemic and lockdown demands
						</h4>
						<time className="timestamp">-May 24, 2018</time>
					</div>
				</div>
			</StyledHeroSide>
		</Fragment>
	);
}
