import React from 'react';
import styled from 'styled-components';

const StyledSubHeading = styled.div`
	margin: 10px 0;
	.heading {
		display: flex;
		h1 {
			margin-right: 10px;
			padding-bottom: 0;
		}
		.underline {
			border-bottom: 1px solid #f1f1f1;
			width: 100%;
			margin-bottom: 29px;
		}
	}
`;
export default function SubHeading({ heading }) {
	return (
		<Wrapper>
			<StyledSubHeading>
				<div className="heading">
					<h1>{heading}</h1>
					<span className="underline" />
				</div>
			</StyledSubHeading>
		</Wrapper>
	);
}
