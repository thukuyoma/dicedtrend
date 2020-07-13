import React, { Fragment, useState } from 'react';
import { Main } from '../assets/Layout';
import { Button } from '../assets/Button';
import { StyledInput } from '../assets/StyledInput';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../layout/navigation/Header';
import Footer from '../layout/navigation/Footer';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../redux/actions/postActions';

const StyledCreatePost = styled.div`
	.show-label-false {
		margin-left: 36px;
		font-size: 11px;
		display: none;
	}
	.show-label-true {
		margin-left: 36px;
		font-size: 11px;
		display: block;
	}
	.post-thumbnail {
		width: 100%;
		border-radius: 5px;
		// margin-left: 36px;
		font-size: 11px;
		max-height: 340px;
	}
	.image-uploader {
		border-radius: 42px;
		background: #fafafa;
		box-sizing: border-box;
		padding: 0 20px;
		margin: 10px 0;
		height: 45px;
		/* justify-content: center; */
		display: flex;
		align-items: center;
	}
`;

export default function CreatePost() {
	const [postImage, setPostImage] = useState({
		preview: '',
		raw: '',
	});
	const [postFormData, setPostFormData] = useState({
		title: '',
		article: '',
		// category: '',
		tags: '',
		summary: '',
	});
	const [category, setCategory] = useState({ value: 'technology' });
	const handelCategoryChange = (e) => {
		setCategory({ value: e.target.value });
	};
	// const [label, setLabel] = useState({
	// 	title: false,
	// 	article: false,
	// 	category: false,
	// 	tags: false,
	// 	summary: false,
	// });
	const dispatch = useDispatch();

	const { title, article, summary, tags } = postFormData;

	const onChange = (e) => {
		setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
	};
	const handleImageChange = (e) => {
		setPostImage({
			preview: URL.createObjectURL(e.target.files[0]),
			raw: e.target.files[0],
		});
	};
	// console.log(e.target.files.lenght);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (e.target.files) {
			// dispatch(setAlert('Please choose a post image to upload', 'danger'));
		} else {
			const formData = new FormData();
			formData.append('postImage', postImage.raw);
			formData.append('category', category.value);
			Object.keys(postFormData).forEach((key) =>
				formData.append(key, postFormData[key])
			);
			dispatch(createPost(formData));
		}
	};
	const isLoading = useSelector((state) => state.post.loading);
	// if (!isLoading) return <Redirect to={`/profile`} />;
	return (
		<Fragment>
			<Header />
			<Main>
				<StyledCreatePost>
					<StyledInput>
						<form onSubmit={onSubmit} encType="multipart/form-data">
							<div>
								{/* <label>choose post Image</label> */}
								<label htmlFor="post-image">
									{postImage.preview ? (
										<img
											// className="post-thumbnail"
											className="post-thumbnail"
											src={`${postImage.preview}`}
											alt="Post thumbnail holder"
											onClick={null}
										/>
									) : (
										<div className="image-uploader">
											<i class="far fa-image"></i>{' '}
											<span>Upload post photo</span>
										</div>
									)}
								</label>
								<input
									onChange={handleImageChange}
									type="file"
									id="post-image"
									className="styled-input"
									name="fileToUpload"
									accept="image/*"
									style={{ display: 'none' }}
								/>
							</div>
							<div>
								{/* <label className={`show-label-${label.title}`}>Post title</label> */}
								<input
									onChange={onChange}
									name="title"
									value={title}
									type="dropdown"
									autoComplete="off"
									className="styled-input"
									placeholder="Title"
									onFocus={(e) => (e.target.placeholder = '')}
									// onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) => (e.target.placeholder = 'Title')}
								/>
							</div>
							<div>
								{/* <label className="input-label">Category</label> */}
								<select
									onChange={handelCategoryChange}
									value={category.value}
									className="styled-input"
								>
									<option>Technology</option>
									<option>Startup</option>
									<option>Reviews</option>
									<option>Marketing</option>
								</select>
							</div>

							<div>
								{/* <label className="input-label">Tags</label> */}

								<input
									onChange={onChange}
									name="tags"
									autoComplete="off"
									value={tags}
									className="styled-input"
									placeholder="Tags"
									onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) => (e.target.placeholder = 'Tag')}
								/>
							</div>
							<div>
								<input
									onChange={onChange}
									name="summary"
									value={summary}
									autoComplete="off"
									className="styled-input"
									placeholder="Summary"
									onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) => (e.target.placeholder = 'Summary')}
								/>
							</div>
							<div>
								<textarea
									onChange={onChange}
									name="article"
									value={article}
									type="textarea"
									className="styled-input"
									placeholder="Write post content here..."
									onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) =>
										(e.target.placeholder = 'Write post content here...')
									}
								/>
							</div>
							<Button>Create post</Button>
						</form>
					</StyledInput>
				</StyledCreatePost>
			</Main>
			<Footer />
		</Fragment>
	);
}
