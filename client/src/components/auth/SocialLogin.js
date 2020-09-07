import React from 'react';
import { SocialAuth } from './RegisterStyle';

export default function SocialLogin() {
	return (
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
	);
}
