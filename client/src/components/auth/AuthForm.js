import React, { useState } from 'react';
import { RegularAuth } from './RegisterStyle';
import preloader from '../assets/preloader.gif';
import { Button } from '../assets/Button';
import { register } from '../../../redux/actions/authActions';
import { login } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

export default function AuthForm(props) {
	const dispatch = useDispatch();

	// authForm button value setter
	let authType;
	if (props.register) authType = 'Register';
	if (props.login) authType = 'Login';

	const [registerFormData, setRegisterFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const [checkbox, setCheckbox] = useState({ isChecked: false });

	const [buttonLoading, setButtonLoading] = useState({ isLoading: false });
	const { isLoading } = buttonLoading;

	const { name, email, password, password2 } = registerFormData;
	const { isChecked } = checkbox;

	const toggleCheckbox = (e) => {
		// setCheckbox({
		// 	...checkbox,
		// 	isChecked: e.target.value,
		// });
		// console.log(checkbox);
	};

	const onChange = (e) => {
		setRegisterFormData({
			...registerFormData,
			[e.target.name]: e.target.value,
		});
	};
	function validationChecker(name, email, password, password2) {
		if ((name, email, password, password2 !== '' && password === password2)) {
			return true;
		} else {
			return false;
		}
	}
	const onSubmit = (e) => {
		e.preventDefault();
		setButtonLoading({ ...buttonLoading, isLoading: true });
		//Validator
		if (props.register) dispatch(register(name, email, password));
		if (props.login) dispatch(login(email, password));
	};
	return (
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
						onChange={toggleCheckbox}
						checked={isChecked}
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
					<Button>{authType}</Button>
				)}
			</form>
		</RegularAuth>
	);
}
