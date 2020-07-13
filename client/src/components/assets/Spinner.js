import React, { Fragment } from 'react';
import spinner from './spinner.gif';
export default function Spinner() {
	return (
		<Fragment>
			<img
				src={spinner}
				style={{ width: '100px', margin: '0 auto', display: 'block' }}
				alt="Loading..."
			/>
		</Fragment>
	);
}
