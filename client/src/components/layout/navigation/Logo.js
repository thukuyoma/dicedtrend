import React, { Fragment } from 'react';
import styled from 'styled-components';
import logoIcon from '../../../images/logoIcon.svg';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

const StyledLogo = styled.div`
	.logo-icon {
		display: none;
		margin: 0;
	}
	@media only screen and (max-width: 600px) {
		.logo-icon {
			display: block;
		}
		.logo-text {
			display: none;
		}
	}
`;

export default function Logo() {
	return (
		<Fragment>
			<StyledLogo>
				<div className="logo">
					<span className="logo-icon">
						<Link to="/">
							<img src={logoIcon} alt="diced trend logo icon" />
						</Link>
					</span>
					<span className="logo-text">
						<Link to="/">
							<img src={logo} alt="diced trend text logo" />
						</Link>
					</span>
				</div>
			</StyledLogo>
		</Fragment>
	);
}
