import styled from 'styled-components';

export const Button = styled.button`
	box-sizing: border-box;
	padding: 0 15px;
	height: 35px;
	border-radius: 30px;
	font-size: 16px;
	background: ${(props) => (props.primary ? 'white' : '#e74c3c')};
	color: ${(props) => (props.primary ? 'black' : 'white')};
	border: 1px solid #e74c3c;
	text-align: center;
	outline: none;
	:hover {
		background: black;
		border: 1px solid black;
		color: white;
	}
`;
