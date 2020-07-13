import React, { useState } from 'react';
import { Button } from '../../assets/Button';
import { StyledInput } from '../../assets/StyledInput';
import styled from 'styled-components';
import preloader from '../../assets/preloader.gif';
import { useDispatch } from 'react-redux';
import { addSubscriber } from '../../../redux/actions/assetActions';

const StyledNewsletter = styled.div`
	box-sizing: border-box;
	width: 200px;
	text-align: center;
	height: 250px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
	padding: 20px;
	color: #a7a7a7;
	font-size: 12px;
	margin: 30px 0;
	border: thin solid #f1f1f1;
	font-weight: bold;
	.fas {
		// color: #cfcfcf;
		font-size: 50px;
	}
`;

export default function Newsletter() {
	const [buttonLoading, setButtonLoading] = useState(false);
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();

	const onChange = (e) => {
		setEmail(e.target.value);
		console.log(email);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setButtonLoading(true);
		// console.log('Email Submitted successfully');
		dispatch(addSubscriber(email));

		setButtonLoading(false);
	};

	return (
		<StyledNewsletter>
			<i class="fas fa-envelope-open-text"></i>
			<p>Subscribe to our mailing list to get the new updates!</p>
			<StyledInput>
				<form onSubmit={onSubmit}>
					<input
						onChange={onChange}
						name="email"
						value={email}
						autoComplete="off"
						className="styled-input"
						placeholder="Email Address"
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Email Address')}
					></input>
					{!buttonLoading ? (
						<Button>Subscribe Now</Button>
					) : (
						<Button primary>
							loading
							<img src={preloader} alt="preloader" />
						</Button>
					)}
				</form>
			</StyledInput>
		</StyledNewsletter>
	);
}
