import styled from 'styled-components';

export const StyledInput = styled.div`
	.styled-input {
		box-sizing: border-box;
		width: 100%;
		margin: 10px auto;
		border-radius: 25px;
		outline: none;
		height: 45px;
		padding: 0 20px;
		border: none;
		background-color: #e6e6e636;

		:focus {
			// background: red;
			.input-label {
				color: red;
				
			}
		}
	}
`;

// export const Text =
