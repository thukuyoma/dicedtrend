import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccountContainer from '../profile/AccountContainer';
import StyledLink from '../../assets/StyledLink';
import { StyledNav } from './StyledNav';

import { showSearchBox } from '../../../redux/actions/assetActions';
function NavLinks() {
	const [hoverShow, setHoverShow] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const handleHover = () => {
		setHoverShow(!hoverShow);
	};

	return (
		<Fragment>
			<StyledNav>
				<nav>
					<ul>
						<li onClick={() => dispatch(showSearchBox())}>
							<StyledLink to="#" style={{ color: 'black' }}>
								<ion-icon name="search"></ion-icon>
							</StyledLink>
						</li>
						<li>
							<StyledLink to="/">
								<ion-icon name="home-outline"></ion-icon>
							</StyledLink>
						</li>
						<li className="cta">
							<StyledLink to="/create-post">
								<ion-icon name="pencil-outline"></ion-icon>
							</StyledLink>
						</li>
						<li>
							<StyledLink to="/">
								<ion-icon name="notifications-outline"></ion-icon>
							</StyledLink>
						</li>
						<li>
							<StyledLink to="/">
								<ion-icon name="toggle-outline"></ion-icon>
							</StyledLink>
						</li>
					</ul>
					<div className="avatar">
						{isAuthenticated && user ? (
							<Fragment>
								<img
									src={`/images/profile/${user.avatar}`}
									alt="dicedtrend user profile account"
									onClick={handleHover}
								/>
								<span className={`hover-account hover hover-show-${hoverShow}`}>
									<AccountContainer user={user} />
								</span>
							</Fragment>
						) : (
							<Fragment>
								<i className="far fa-user-circle" onClick={handleHover}></i>
								<div className={`auth-links hover hover-show-${hoverShow}`}>
									<div>
										<StyledLink to="/login">
											<i className="fas fa-sign-in-alt"></i>Login
										</StyledLink>
									</div>
									<br />
									<div>
										<StyledLink to="/register">
											<i className="fas fa-user-plus"></i>Register
										</StyledLink>
									</div>
								</div>
							</Fragment>
						)}
					</div>
				</nav>
			</StyledNav>
		</Fragment>
	);
}
export default NavLinks;
