import React, { Fragment, useState } from 'react';
import { Main, Frame } from '../assets/Layout';
import { Button } from '../assets/Button';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../layout/navigation/Header';
import Footer from '../layout/navigation/Footer';
import { editUserPost } from '../../redux/actions/postActions';
import { Redirect } from 'react-router-dom';

const Label = styled.label`
	margin-left: 36px;
	font-size: 11px;
`;

const StyledEditPost = styled.div`
	.post-thumbnail {
		width: 100%;
		border-radius: 5px;
	}
`;
export default function CreatePost({ location, match }) {
	const postId = match.params.user_post_id;
	const [postImage, setPostImage] = useState(`${location.state.photos}`);
	const [postFormData, setPostFormData] = useState({
		title: `${location.state.title}`,
		article: `${location.state.article}`,
		category: `${location.state.category}`,
		tags: `${location.state.tags}`,
		summary: `${location.state.summary}`,
	});

	const dispatch = useDispatch();

	const { title, article, summary, category, tags } = postFormData;

	const onChange = (e) => {
		setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
	};
	const handleImageChange = (e) => {
		setPostImage(e.target.files[0]);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('postImage', postImage);
		Object.keys(postFormData).forEach((key) =>
			formData.append(key, postFormData[key])
		);
		dispatch(editUserPost(formData, postId));
	};

	const isLoading = useSelector((state) => state.post);
	if (!isLoading) return <Redirect to={`/posts/${postId}`} />;
	return (
		<Fragment>
			<Header />
			<Frame>
				<Main>
					<StyledEditPost>
						{/* <StyledInput> */}
						<form onSubmit={onSubmit} encType="multipart/form-data">
							<div>
								<Label>choose post Image</Label>
								<img
									className="post-thumbnail"
									src={`/images/posts/${location.state.photos}`}
									// src="https://source.unsplash.com/random/207x227"
									alt="Post thumbnail holder"
								/>
								<input
									onChange={handleImageChange}
									type="file"
									className="styled-input"
									name="fileToUpload"
									accept="image/*"
								/>
							</div>
							<div>
								<Label>Post title</Label>
								<input
									onChange={onChange}
									name="title"
									value={title}
									type="dropdown"
									className="styled-input"
									placeholder="Post Title"
								/>
							</div>
							<div>
								<Label className="input-label">Category</Label>
								<input
									onChange={onChange}
									name="category"
									value={category}
									type="text"
									className="styled-input"
									placeholder="post category"
								/>
							</div>
							<div>
								<Label className="input-label">Tags</Label>
								<input
									onChange={onChange}
									name="tags"
									value={tags}
									className="styled-input"
									placeholder="Tags"
								/>
							</div>
							<div>
								<input
									onChange={onChange}
									name="summary"
									value={summary}
									className="styled-input"
									placeholder="Summary"
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
								/>
							</div>
							<Button>Update</Button>
						</form>
						{/* </StyledInput> */}
					</StyledEditPost>
				</Main>
			</Frame>
			<Footer />
		</Fragment>
	);
}
