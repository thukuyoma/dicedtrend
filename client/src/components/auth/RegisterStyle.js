import styled from 'styled-components';

export const LoginSection = styled.section`
	justify-content: center;
	display: grid;
	.auth-title {
		margin: 40px 0 20px;
		text-align: center;
	}
	.tagline {
		margin-top: 100px;
		font-size: 14px;
		text-align: center;

		p {
			margin: 0;
		}
	}
`;
export const SocialAuth = styled.div`
	display: grid;
	margin: auto;
	width: 300px;
	.social-holder {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 25px;
		margin: 10px 0;
		width: 290px;
		height: 45px;
		color: #ffffff;
		font-size: 16px;
	}

	.fa {
		margin-right: 10px;
	}

	.f-color {
		background-color: #3b5998;
	}
	.g-color {
		background-color: #e74c3c;
	}
	.t-color {
		background-color: #1da1f2;
	}
	.auth-type {
		margin: 0 3.2px 0 5px;
	}
`;
export const RegularAuth = styled.div`
	display: grid;
	width: 290px;
	text-align: center;
	.input {
		box-sizing: border-box;
		width: 100%;
		margin: 10px auto;
		border-radius: 25px;
		outline: none;
		height: 45px;
		padding: 0 35px;
		border: none;
		background-color: #e6e6e636;
	}

	.check-area {
		display: flex;
		margin: 15px 0 25px 0;
		.checkbox {
			margin-right: 14px;
		}
		.checkbox-terms {
			font-size: 12px;
			font-weight: 300;
			text-align: left;
		}
	}
`;
