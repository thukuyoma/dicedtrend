import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '../assets/Button';
import { LoginSection, SocialAuth, RegularAuth } from './RegisterStyle';
import { Main } from '../assets/Layout';
import preloader from '../assets/preloader.gif';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import StyledLink from '../assets/StyledLink';
export default function Login() {
	const [registerFormData, setRegisterFormData] = useState({
		email: '',
		password: '',
	});
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	const [buttonLoading, setButtonLoading] = useState({ isLoading: false });
	const { isLoading } = buttonLoading;
	const { email, password } = registerFormData;

	const onChange = (e) => {
		setRegisterFormData({
			...registerFormData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setButtonLoading({ ...buttonLoading, isLoading: true });
		if ((email, password !== '')) return dispatch(login(email, password));
	};

	if (isAuthenticated) return <Redirect to="/" />;
	return (
		<Fragment>
			<Main>
				<LoginSection>
					<SocialAuth>
						<h1 className="auth-title">Login</h1>
						<div className="social-holder f-color">
							<i className="fa fa-facebook-official"></i>
							Login with Facebook
						</div>
						<div className="social-holder g-color">
							<i className="fa fa-google"></i>
							Login with Google
						</div>
						<div className="social-holder t-color">
							<i className="fa fa-twitter"></i>
							Login with Twitter
						</div>
					</SocialAuth>
					<h4 className="auth-title">Login with email</h4>
					<RegularAuth>
						<form onSubmit={onSubmit}>
							<input
								type="text"
								className="input"
								placeholder="Email"
								name="email"
								value={email}
								onChange={onChange}
							/>
							<input
								type="password"
								className="input"
								placeholder="Password"
								name="password"
								onChange={onChange}
								value={password}
							/>

							{isLoading ? (
								<Button primary disabled={isLoading}>
									loading
									<img src={preloader} alt="preloader" />
								</Button>
							) : (
								<Button>Login</Button>
							)}
						</form>
					</RegularAuth>
					<div className="tagline">
						<p>Dont have an account</p>

						<StyledLink to="/register">Register</StyledLink>
					</div>
				</LoginSection>
			</Main>
		</Fragment>
	);
}
