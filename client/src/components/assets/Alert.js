import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeAlert } from '../../redux/actions/alertActions';

const StyledALert = styled.div`
	// position: fixed;
	section {
		background: #f4f4f4;
		color: #333;
		@media only screen and (min-width: 320px) {
			padding: 0 15px;
		}
		@media only screen and (max-width: 1000px) {
			padding: 0 15px;
		}
	}
	.alert {
		max-width: 760px;
		padding: 0.8rem;
		margin: 1rem 0;
		opacity: 0.9;
		font-size: 12px;
		margin: auto;
	}
	.alert-success {
		color: #155724;
		background-color: #d4edda;
	}
	.alert-danger {
		color: #721c24;
		background-color: #f8d7da;
	}
	span {
		float: right;
	}
`;

const Alert = () => {
	const dispatch = useDispatch();
	const alerts = useSelector((state) => state.alerts);
	const alert =
		alerts !== null &&
		alerts.length > 0 &&
		alerts.map((alert) => (
			<Fragment key={alert.id}> 
				<StyledALert>
					<div className={`alert-${alert.alertType}`}>
						<div className={`alert`}>
							{`${alert.message}`}
							<span
								onClick={dispatch(removeAlert(alert.id))}
								style={{
									paddingLeft: '20px',
									color: 'white',
									fontWeight: 'bold',
								}}
							>
								{/* x */}
							</span>
						</div>
					</div>
				</StyledALert>
			</Fragment>
		));
	return <div>{alert}</div>;
};

export default Alert;
