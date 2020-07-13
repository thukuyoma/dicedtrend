import React from 'react';
import styled from 'styled-components';
import StyledLink from '../../assets/StyledLink';
import { logout } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const Section = styled.section`
	border-radius: 5px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
	padding: 30px 30px;
	background: white;
	border: 1px solid #8080806b;
	// position: fixed;

	.details {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eae7e7c4;
		padding-bottom: 30px;
		.avatar {
			border-radius: 50px;
			margin-right: 20px;
			height: 90px;
			width: 90px;
		}
		.user-details {
			.name-text,
			h3 {
				margin: 0;
				font-weight: 400;
			}
			.email-text {
				font-size: 15px;
				font-weight: 300;
				margin-bottom: 0;
			}
		}
	}

	.shortcuts {
		margin-top: 20px;
		font-size: 16px;
		border-bottom: 1px solid #eae7e7c4;
		padding-bottom: 30px;

		// .far,
		.fas {
			margin-right: 25px;
			font-size: 16px;
			color: #313131c7;
		}
		.far {
			margin-right: 30px;
			font-size: 16px;
			color: #4f4f4f;
		}

		.shortcut-link {
			font-weight: 300;
			font-size: 16px;
		}
	}
	.account-links {
		display: flex;
		margin-top: 20px;
		paddingg-top: 10px;
		justify-content: space-between;
		font-size: 16px;
		color: 4f4f4f;
		// background: red;
		font-weight: 300;
	}
	.link-container {
		margin-top: 15px;
	}
`;
export default function AccountContainer({ user }) {
	const firstName = user.name.split(' ')[0];
	const lastName = user.name.split(' ')[1];
	const email = user.email.split('@')[0];

	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
	};
	return (
		<Section>
			<div className="details">
				<img
					className="avatar"
					src={`/images/profile/${user.avatar}`}
					alt="dicedtrend user profile account"
				/>
				<div className="user-details">
					<h3 className="name-text">{firstName}</h3>
					<h3>{lastName}</h3>
					<p className="email-text">{`@${email}`}</p>
				</div>
			</div>
			<div className="shortcuts">
				<div className="link-container">
					<StyledLink to="/profile">
						<i className="far fa-user"></i>
						<span className="shortcut-link">Profile</span>
					</StyledLink>
				</div>
				<div className="link-container">
					<StyledLink to="/create-post">
						<i className="fas fa-pencil-alt"></i>
						<span className="shortcut-link">Write a post</span>
					</StyledLink>
				</div>
				<div className="link-container">
					<StyledLink to="/">
						<i className="far fa-clipboard"></i>
						<span className="shortcut-link">My post</span>
					</StyledLink>
				</div>
				<div className="link-container">
					<StyledLink to="/">
						<i className="far fa-user"></i>
						<span className="shortcut-link">Help</span>
					</StyledLink>
				</div>
				<div className="link-container">
					<i className="fas fa-cog"></i>
					<span className="shortcut-link">Settings</span>
				</div>
				<div className="link-container" onClick={onLogout}>
					<StyledLink to='/'>
						<i className="fas fa-arrow-right"></i>
						<span className="shortcut-link">Logout</span>
					</StyledLink>
				</div>
			</div>
			<div className="account-links">
				<span>About</span>
				<span>Business</span>
				<span>Privacy</span>
			</div>
		</Section>
	);
}
