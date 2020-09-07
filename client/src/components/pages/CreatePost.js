import React, { Fragment } from 'react';
import { Main } from '../assets/Layout';
import { Button } from '../assets/Button';
import { StyledInput } from '../assets/StyledInput';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../layout/navigation/Header';
import Footer from '../layout/navigation/Footer';
import { createPost } from '../../redux/actions/postActions';
import { Redirect } from 'react-router-dom';
import useCreatePost from '../layout/post/useCreatePost';
import postValidation from '../layout/post/postValidation';

export default function CreatePost() {
	const initialState = {
		title: '',
		article: '',
		tags: '',
		summary: '',
		category: 'technology',
		preview: '',
		raw: '',
	};
	const {
		values,
		errors,
		counter,
		onChange,
		onSubmit,
		handleFileChange,
	} = useCreatePost(createPost, postValidation, initialState);
	const { title, article, tags, summary, category, preview } = values;
	console.log(errors);
	const auth = useSelector((state) => state.auth);
	if (!auth.isAuthenticated && !auth.user) return <Redirect to="/login" />;
	return (
		<Fragment>
			<Header />
			<Main>
				<StyledCreatePost>
					<StyledInput>
						<form onSubmit={onSubmit} encType="multipart/form-data">
							<div>
								<label htmlFor="post-image">
									{preview ? (
										<img
											className="post-thumbnail"
											src={`${preview}`}
											alt="Post thumbnail holder"
											onClick={null}
										/>
									) : (
										<div className="image-uploader">
											<i className="far fa-image"></i>{' '}
											<span>Upload post photo</span>
										</div>
									)}
								</label>
								{errors.preview && (
									<p className="form-error">
										<i className="fas fa-exclamation-circle"></i>
										{errors.preview}
									</p>
								)}
								<input
									onChange={handleFileChange}
									type="file"
									id="post-image"
									className="styled-input"
									accept="image/*"
									style={{ display: 'none' }}
								/>
							</div>
							<div>
								{counter.title && <p>{counter.title} of 200</p>}
								<input
									onChange={onChange}
									name="title"
									value={title}
									type="dropdown"
									autoComplete="off"
									className="styled-input"
									placeholder="Title"
									onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) => (e.target.placeholder = 'Title')}
								/>
								{errors.title && (
									<p className="form-error">
										<i className="fas fa-exclamation-circle"></i>
										{errors.title}
									</p>
								)}
							</div>
							<div className="select-container">
								<select
									onChange={onChange}
									value={category}
									name="category"
									className="styled-input"
								>
									<option>Technology</option>
									<option>Startup</option>
									<option>Reviews</option>
									<option>Marketing</option>
								</select>
							</div>

							<div>
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
								{errors.tags && (
									<p className="form-error">
										<i className="fas fa-exclamation-circle"></i>
										{errors.tags}
									</p>
								)}
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
								{errors.summary && (
									<p className="form-error">
										<i className="fas fa-exclamation-circle"></i>
										{errors.summary}
									</p>
								)}
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
								{errors.article && (
									<p className="form-error">
										<i className="fas fa-exclamation-circle"></i>
										{errors.article}
									</p>
								)}
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
		display: flex;
		align-items: center;
	}
	.far {
		margin-right: 10px;
	}

	.fas {
		margin-right: 10px;
		color: red;
	}
	.form-error {
		font-size: 12px;
		color: red;
		text-align: left;
	}
`;
