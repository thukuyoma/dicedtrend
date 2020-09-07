import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginSection, RegularAuth } from './RegisterStyle';
import { Main } from '../assets/Layout';
import preloader from '../assets/preloader.gif';
import { Button } from '../assets/Button';
import { register } from '../../redux/actions/authActions';
import { useSelector } from 'react-redux';
import StyledLink from '../assets/StyledLink';
import registerValidation from './registerValidation';
import useForm from './useForm';

export default function Register() {
	const initialState = {
		name: '',
		email: '',
		password: '',
	};
	const { values, errors, buttonLoading, onChange, onSubmit } = useForm(
		register,
		registerValidation,
		initialState
	);

	const auth = useSelector((state) => state.auth);
	if (auth.isAuthenticated && auth.user) return <Redirect to="/" />;

	return (
		<Fragment>
			<Main>
				<LoginSection>
					<h4 className="auth-title">Register with email</h4>
					<RegularAuth props>
						<form onSubmit={onSubmit}>
							<input
								type="text"
								className="input"
								placeholder="Name"
								name="name"
								value={values.name}
								onChange={onChange}
							/>
							{errors.name && (
								<p className="form-error">
									<i className="fas fa-exclamation-circle"></i>
									{errors.name}
								</p>
							)}
							<input
								type="text"
								className="input"
								placeholder="Email"
								name="email"
								value={values.email}
								onChange={onChange}
							/>
							{errors.email && (
								<p className="form-error">
									<i className="fas fa-exclamation-circle"></i>
									{errors.email}
								</p>
							)}
							<input
								type="password"
								className="input"
								placeholder="Password"
								name="password"
								onChange={onChange}
								value={values.password}
							/>
							{errors.password && (
								<p className="form-error">
									<i className="fas fa-exclamation-circle"></i>
									{errors.password}
								</p>
							)}
							<input
								type="password"
								className="input "
								placeholder="Confirm password"
								name="password2"
								onChange={onChange}
								value={values.Mainpassword2}
							/>
							{errors.password2 && (
								<p className="form-error">
									<i className="fas fa-exclamation-circle"></i>
									{errors.password2}
								</p>
							)}
							<div className="check-area">
								<span className="checkbox-terms ">
									By registering you agree to the terms and policies govering
									dicedtrend
								</span>
							</div>

							{buttonLoading ? (
								<Button primary disabled={buttonLoading}>
									loading
									<img src={preloader} alt="preloader" />
								</Button>
							) : (
								<Button>Register</Button>
							)}
						</form>
					</RegularAuth>
					<div className="tagline">
						<StyledLink to="/login">
							<p>
								Already have an account?{' '}
								<span style={{ color: '#e74c3c' }}>Login</span>
							</p>
						</StyledLink>
					</div>
				</LoginSection>
			</Main>
		</Fragment>
	);
}
