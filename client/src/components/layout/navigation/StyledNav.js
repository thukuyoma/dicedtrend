import styled from 'styled-components';

export const StyledNav = styled.nav`
	nav {
		float: right;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.avatar {
		// width: 20px;
		// height: 20px;
		border-radius: 50%;

		img {
			border-radius: 50%;
		}
	}
	ul {
		list-style: none;
		margin: 0px 16px 0px 0px;
		padding: 0;

		li {
			display: inline;
			margin: 0 16px;

			ion-icon {
				font-size: 20px;
				color: rgba(0, 0, 0, 0.84);
			}
		}
	}
	.far {
		color:	rgba(0,0,0,0.84);
		font-size: 23px;
}
	}

	@media only screen and (max-width: 400px) {
		nav {
			margin: 0;
			padding: 0;
			justify-content: center;

			ul {
				margin: 8px 11px 0px 0px;

				li {
					padding: 0px;
					margin-right: 10px;
					ion-icon {
						font-size: 20px;
					}
				}
			}

			.avatar {
				width: 20px;
				height: 20px;
			
			}
		}
	}
							img {
								margin: -10px;
								// border-radius: 50%;
								width: 30px;
								height: 30px;
							}
	.hover {
		display: none;
	}
	.hover-show-true {
		display: block;
		
	}


	.auth-links {
		margin: 30px 20px 0 -149px;
		position: absolute;
		width: 175px;
		text-align: left;
		background: white;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
		padding: 30px;
		box-sizing: border-box;
		color: #4f4f4f;
		}

		.fas {
			margin-right: 20px;
			color: #4f4f4f;
		}

	.hover-account {
		margin-top: 30px;
		position: absolute;
		height: 440px;
		margin-left: -230px;
		width: 260px;
	}
	
`;
