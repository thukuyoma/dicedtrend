import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeroMain = styled.div`
	.hero-main {
		display: grid;
		grid-template-colums: 1fr;
		// width: 286px;

		.post-title {
			margin: 0;
			font-size: 21px;
		}
		.post-summary {
			font-size: 13px;
			font-weight: 300;
			letter-spacing: 2px;
		}
		.post-thumbnail {
			width: 100%;
			margin: 15px 0 10px 0;
			border-radius: 5px;
		}
		.post-legend {
			display: flex;
			padding-top: 10px;
			justify-content: space-between;
			.post-cta {
				font-size: 13px;
				font-weight: 300;
				color: red;
			}
			.post-author {
				font-size: 13px;
				font-weight: 300;
			}
		}
	}
`;

export default function HeroMain() {
	return (
		<Fragment>
			<StyledHeroMain>
				<div className="hero-main">
					<h3 className="post-title">
						Why do you think Jungkook from BTS doesn’t do any VLives anymore?
					</h3>
					<img
						className="post-thumbnail"
						src="https://source.unsplash.com/random/370x230"
						alt="featured Post Thumb Nail"
					/>
					{/* <summary className="post-summary">
						The impact of the pandemic and lockdown dema nds a lot of innovation
						from entrepreneurs, a pro cess that might be eased with the creation
						of tra
					</summary> */}
					<div className="post-legend">
						<span className="post-cta">Continue reading</span>
						<span className="post-author">Judge Sahala</span>
					</div>
				</div>
			</StyledHeroMain>
		</Fragment>
	);
}
