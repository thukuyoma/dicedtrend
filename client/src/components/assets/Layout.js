import styled from 'styled-components';

export const Main = styled.section`
	min-height: 60vh;
	max-width: 600px;
	margin: 30px auto;
	@media only screen and (max-width: 500px) {
		padding: 0 15px;
		margin-right: 0;
	}
`;

export const Aside = styled.aside`
	min-height: 60vh;
	margin: 30px auto;
	margin-left: 20px;
	@media only screen and (max-width: 1000px) {
		display: none;
	}
`;

export const Frame = styled.section`
	max-width: 800px;
	display: flex;
	margin: 0 auto;
`;
