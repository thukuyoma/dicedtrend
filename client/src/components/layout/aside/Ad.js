import React from 'react';
import styled from 'styled-components';

const StyledAd = styled.div`
	.ad-poster {
		border-radius: 5px;
		margin: 10px 0;
		width: 200px;
	}
`;
export default function Ad() {
	return (
		<StyledAd>
			<img className="ad-poster" src="/images/advert/poster.jpg" alt="" />
		</StyledAd>
	);
}
