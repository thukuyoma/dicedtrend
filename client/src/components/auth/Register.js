import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginSection, SocialAuth, RegularAuth } from './RegisterStyle';
import { Main } from '../assets/Layout';
import preloader from '../assets/preloader.gif';
import { Button } from '../assets/Button';
import { register } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import StyledLink from '../assets/StyledLink';

export default function Register() {
	const [registerFormData, setRegisterFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	const [buttonLoading, setButtonLoading] = useState({ isLoading: false });
	const { isLoading } = buttonLoading;

	const { name, email, password, password2 } = registerFormData;

	const onChange = (e) => {
		setRegisterFormData({
			...registerFormData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setButtonLoading({ ...buttonLoading, isLoading: true });
		if ((name, email, password, password2 !== '' && password === password2)) {
			return dispatch(register(name, email, password));
		}
	};

	if (isAuthenticated) return <Redirect to="/" />;

	return (
		<Fragment>
			<Main>
				<LoginSection>
					<SocialAuth>
						<h1 className="auth-title">Register</h1>
						<div className="social-holder f-color">
							<i className="fa fa-facebook-official"></i>
							Register with Facebook
						</div>
						<div className="social-holder g-color">
							<i className="fa fa-google"></i>
							Register with Google
						</div>
						<div className="social-holder t-color">
							<i className="fa fa-twitter"></i>
							Register with Twitter
						</div>
					</SocialAuth>
					<h4 className="auth-title">Register with email</h4>
					<RegularAuth props>
						<form onSubmit={onSubmit}>
							<input
								type="text"
								className="input"
								placeholder="Name"
								name="name"
								value={name}
								onChange={onChange}
							/>
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
							<input
								type="password"
								className="input "
								placeholder="Confirm password"
								name="password2"
								onChange={onChange}
								value={password2}
							/>
							<div className="check-area">
								<input
									className="checkbox"
									type="checkbox"
									name="check"
								/>
								<span className="checkbox-terms ">
									By registering you agree to the terms and policies govering
									dicedtrend
								</span>
							</div>

							{isLoading ? (
								<Button primary disabled={isLoading}>
									loading
									<img src={preloader} alt="preloader" />
								</Button>
							) : (
								<Button>Register</Button>
							)}
						</form>
					</RegularAuth>
					<div className="tagline">
						<p>Already have an account?</p>
						<StyledLink to="/login">Login</StyledLink>
					</div>
				</LoginSection>
			</Main>
		</Fragment>
	);
}
