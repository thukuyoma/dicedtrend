import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	width: 100%;
	text-align: center;
    color: white;
    padding-top: 15px;
	margin-top: 100px;
	bottom: 0;
	// position: fixed;

	background-color: #151414;

	ul {
		margin: 0;
		padding: 0;
	}
	li {
		display: inline;
		padding: 10px;
		font-size: 12px;
	}

	nav {
		display: block;
        justify-content: center;
        padding-bottom: 15px;

		p {
			margin: 5px;
			font-size: 12px;
			// font-weight: 200;
		}
	}
	// @media(max-width: 400px){
	//     background: red;
	// }
`;

export default function Footer() {
	return (
		<Fragment>
			<StyledFooter>
				<footer>
					<nav>
						<ul>
							<li>About</li>
							<li>Privacy</li>
							<li>Terms</li>
							<li>Careers</li>
							<li>Business</li>
						</ul>
						<p>Copyright © 2020 All rights reserved diced trend</p>
					</nav>
				</footer>
			</StyledFooter>
		</Fragment>
	);
}
