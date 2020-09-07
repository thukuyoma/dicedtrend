import React from 'react';
import { SocialAuth } from './RegisterStyle';

export default function SocialRegister() {
	return (
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
	);
}
