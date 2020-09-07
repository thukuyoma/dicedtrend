import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '../assets/Button';
import { LoginSection, RegularAuth } from './RegisterStyle';
import { Main } from '../assets/Layout';
import preloader from '../assets/preloader.gif';
import { useSelector } from 'react-redux';
import { forgotPassword } from '../../redux/actions/authActions';
import useForm from './useForm';
import forgotPasswordValidation from './forgotPasswordValidation';

export default function Login() {
	const initialState = { email: '' };
	const auth = useSelector((state) => state.auth);

	const { values, errors, buttonLoading, onChange, onSubmit } = useForm(
		forgotPassword,
		forgotPasswordValidation,
		initialState
	);

	if (auth.isAuthenticated && auth.user) return <Redirect to="/" />;
	
	return (
		<Fragment>
			<Main>
				<LoginSection>
					<h1 className="auth-title">Login with email</h1>
					<RegularAuth>
						<form onSubmit={onSubmit}>
							<p>
								Forgot password? Please enter the email address associated with
								your account. You will recieve a password reset link via the
								email you provided
							</p>
							<input
								type="text"
								className="input"
								placeholder="Email"
								name="email"
								value={values.email}
								onChange={onChange}
								autoComplete="off"
							/>
							{errors.email && (
								<p className="form-error">
									<i className="fas fa-exclamation-circle"></i>
									{errors.email}
								</p>
							)}

							{buttonLoading ? (
								<Button primary disabled={buttonLoading}>
									loading
									<img src={preloader} alt="preloader" />
								</Button>
							) : (
								<Button>Login</Button>
							)}
						</form>
					</RegularAuth>
				</LoginSection>
			</Main>
		</Fragment>
	);
}
