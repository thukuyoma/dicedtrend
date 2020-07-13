import React from 'react';
import styled from 'styled-components';

const StyledSubHeading = styled.div`
	margin: 10px 0;
	.heading {
		display: flex;
		h1 {
			margin: 0 10px 0 0;
			padding-bottom: 0;
		}
		.underline {
			border-bottom: 1px solid #f1f1f1;
			width: 100%;
			margin-bottom: 6px;
		}
	}
`;
export default function SubHeading({ heading }) {
	return (
		<StyledSubHeading>
			<div className="heading">
				<h1>{heading}</h1>
				<spam className="underline" />
			</div>
		</StyledSubHeading>
	);
}
