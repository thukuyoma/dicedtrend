import React, { Fragment, useState } from 'react';
import { Main } from '../assets/Layout';
import { Button } from '../assets/Button';
import axios from 'axios';

export default function Upload() {
	const [file, setFile] = useState('');

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
		// console.log(file);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);
		// console.log(formData);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const progress = {
				progress: (progressEvent) => {
					console.log(progressEvent);
				},
			};
			const res = await axios.post('/upload/', formData, config);
			console.log(res.data.image);
		} catch (err) {
			console.log(err.response.data.msg);
			console.log(err.status);
		}
	};
	return (
		<Fragment>
			<Main>
				<form onSubmit={onSubmit} enctype="multipart/form-data">
					{/* <label>{file}</label> */}
					<input
						type="file"
						placeholder="choose file"
						onChange={handleOnChange}
					/>
					<Button>Submit</Button>
				</form>
			</Main>
		</Fragment>
	);
}
