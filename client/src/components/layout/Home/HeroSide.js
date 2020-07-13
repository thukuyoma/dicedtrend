import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeroSide = styled.div`
	z-index: -9;
	.hero-side-post {
		display: grid;
		margin-bottom: 10px;
		grid-template-columns: repeat(autofill, 1fr);
		grid-template-areas:
			'post-thumbnail  post-title'
			'post-thumbnail timestamp'
			'post-thumbnail  post-author';
	}
	.tagline {
		margin-bottom: 10px;
		font-weight: bold;
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
	}

	.timestamp {
		grid-area: timestamp;
		font-size: 12px;
		color: red;
		font-weight: 100px;
	}

	.post-author {
		grid-area: post-author;
		font-size: 12px;
		font-weight: 300px;
		bottom: 0px;
	}
`;
export default function HeroSide() {
	return (
		<Fragment>
			<StyledHeroSide>
				<div className="tagline">Break News</div>
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
						<span className="post-author">Theophilus Ukuyoma</span>
					</div>
					<div className="hero-side-post">
						<img
							className="post-thumbnail"
							src="https://source.unsplash.com/random/125x110"
							alt="Post thumbnail holder"
						/>
						<h4 className="post-title">
							The impact of the pandemic and lockdown demands
						</h4>
						<time className="timestamp">-May 24, 2018</time>
						<span className="post-author">Theophilus Ukuyoma</span>
					</div>
					<div className="hero-side-post">
						<img
							className="post-thumbnail"
							src="https://source.unsplash.com/random/125x110"
							alt="Post thumbnail holder"
						/>
						<h4 className="post-title">
							The impact of the pandemic and lockdown demands
						</h4>
						<time className="timestamp">-May 24, 2018</time>
						<span className="post-author">Theophilus Ukuyoma</span>
					</div>
				</div>
			</StyledHeroSide>
		</Fragment>
	);
}
