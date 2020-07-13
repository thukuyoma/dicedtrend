import styled from 'styled-components';

export const Main = styled.section`
	max-width: 540px;
	min-height: 60vh;
	margin: 30px auto;
	@media only screen and (max-width: 500px) {
		padding: 0 15px;
	}
`;

export const Aside = styled.aside`
	// max-width: 300px;
	min-height: 60vh;
	margin: 30px auto;
	@media only screen and (min-width: 320px) {
		// padding: 0 15px;
		// display: none;
	}
	@media only screen and (max-width: 1000px) {
		// padding: 0 15px;
		display: none;
	}
`;

export const Frame = styled.section`
	max-width: 752px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`;
