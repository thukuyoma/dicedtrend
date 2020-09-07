import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
	img {
		width: 200px;
		height: 312px;
		background: #e6e6e6;
		border-radius: 5px;
	}
`;
export default function Slider() {
	return (
		<StyledSlider>
			<img src="https://source.unsplash.com/random/200x312" />
		</StyledSlider>
	);
}
