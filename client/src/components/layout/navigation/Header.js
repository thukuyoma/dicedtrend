import React, { Fragment } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Search from '../navigation/Search';
import { useSelector } from 'react-redux';
// import { showSearchBox } from '../../../redux/actions/assetActions';
const StyledHeader = styled.header`
	header {
		display: flex;
		max-width: 900px;
		// margin: 0 auto;
		margin-top: 12px;
		margin-right: auto;
		margin-bottom: 0;
		margin-left: auto;
		justify-content: space-between;
		@media only screen and (min-width: 320px) {
			padding: 0 15px;
			margin-top: 12px;
			margin-bottom: 12px;
		}
		@media only screen and (max-width: 1000px) {
			padding: 0 15px;
		}
	}
`;

const HeaderWrapper = styled.section`
	width: 100%;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
	height: 40px;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;
function Header() {
	const showSearchBox = useSelector((state) => state.asset.showSearchBox);
	return (
		<Fragment>
			<HeaderWrapper>
				<StyledHeader>
					<header>
						<Logo />
						<NavLinks />
					</header>
				</StyledHeader>
			</HeaderWrapper>
			{showSearchBox && <Search />}
		</Fragment>
	);
}

export default Header;
