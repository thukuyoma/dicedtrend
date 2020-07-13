import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledCat = styled.section`
	display: grid;
	overflow: hidden;
	margin: 20px 0;
	padding-bottom: 10px;
	.cat-item {
		margin: 0 15px;
		font-size: 15px;
		font-weight: 200;
	}
	ion-icon {
		// padding: 5px;
		color: red;
		margin: 0;
	}
`;

export default function Categories() {
	return (
		<Fragment>
			<StyledCat>
				<div className="cat-courosel">
					<ion-icon name="chevron-back-outline"></ion-icon>
					<span className="cat-item">Fashion</span>
					<span className="cat-item">Food</span>
					{/* <span className="cat-item">Apparel</span>
					<span className="cat-item">DIY</span>
					<span className="cat-item">Education</span> */}
					{/* {/* <span className="cat-item">Lifestyle</span> */}
					<span className="cat-item">Sports</span>
					<span className="cat-item">Fitness</span>
					<span className="cat-item">Health</span>
					<span className="cat-item">Technology</span>
					<span className="cat-item">Creative</span>
					<ion-icon name="chevron-forward-outline"></ion-icon>
				</div>
			</StyledCat>
		</Fragment>
	);
}
