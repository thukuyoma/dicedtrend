import React from 'react';
import styled from 'styled-components';

const StyledCatList = styled.div`
	margin: 10px 0;
	
	ul {
		list-style-type: none;
		padding: 0;
		// font-weight: 300;

		li {
			display: flex;
			justify-content: space-between;
			margin: 5px 0;
			font-weight: 300;
			.count {
				text-align: center;
				border-radius: 19px;
				font-size: 10px;
				padding: 4px;
				color: white;
				font-weight: bold;
			}
		}
	}
`;

export default function CatList({ heading }) {
	return (
		<StyledCatList>
			<ul>
				<li>
					<span className="cat-item">Lifestyle</span>
					<span className="count" style={{ background: '#d72e29' }}>
						12
					</span>
				</li>
				<li>
					<span className="cat-item">Sports</span>
					<span className="count" style={{ background: '#00ceca' }}>
						12
					</span>
				</li>
				<li>
					<span className="cat-item">Food</span>
					<span className="count" style={{ background: '#e37252' }}>
						12
					</span>
				</li>
				<li>
					<span className="cat-item">Apparel</span>
					<span className="count" style={{ background: '#00b894' }}>
						12
					</span>
				</li>
				<li>
					<span className="cat-item">Technology</span>
					<span className="count" style={{ background: '#ff76aa' }}>
						12
					</span>
				</li>
				<li>
					<span className="cat-item">Education</span>
					<span className="count" style={{ background: '#59b0f2' }}>
						12
					</span>
				</li>
			</ul>
		</StyledCatList>
	);
}
