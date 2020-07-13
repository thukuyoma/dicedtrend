import React, { useState } from 'react';
import styled from 'styled-components';
import { Frame } from '../../assets/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getSearchResult } from '../../../redux/actions/postActions';
const StyledSearch = styled.div`
	width: 100%;
	// padding: 0 15px;
	// margin: 20px auto;
	margin-top: 30px;
	justify-content: center;
	box-sizing: border-box;
	form {
		display: flex;
		border: thin solid #cfcfcf;
		padding: 5px;
		border-radius: 5px;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		height: 30px;
	}
	.search-box {
		width: 100%;
		border: none;
		outline: none;

		::placeholder {
			color: #ccc;
			font-size: 14px;
		}
		:focus {
			border: none;
			outline: none;
		}
	}
	.fas {
		color: black;
	}
	.error-message {
		display: block;
		color: #e74c3c;
		font-size: 12px;
		padding: 10px 0;
	}
	button {
		outline: none;
		border: none;
		background: none;
	}
	@media only screen and (max-width: 1000px) {
		max-width: 540px;
	}
`;

export default function Search() {
	const [searchText, setSearchText] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const searchResult = useSelector((state) => state.post.searchedPosts);
	const dispatch = useDispatch();
	const onChange = (e) => {
		setErrorMessage('');
		setSearchText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (searchText === '') {
			setErrorMessage('Sorry the searched field is empty!');
		} else {
			// console.log(searchText);
			dispatch(getSearchResult(searchText));
		}
	};
	if (searchResult) return <Redirect to="/search-result" />;
	return (
		<Frame>
			<StyledSearch>
				{errorMessage.length > 1 && (
					<label className="error-message">{errorMessage}</label>
				)}
				<div>
					<form onSubmit={onSubmit}>
						<input
							type="text"
							className="search-box"
							placeholder="Search dicedpost ..."
							value={searchText}
							name="search"
							onChange={onChange}
							autoComplete="off"
							onFocus={(e) => (e.target.placeholder = '')}
							onBlur={(e) => (e.target.placeholder = 'Search dicedpost ...')}
						/>
						<button>
							<i className="fas fa-search"></i>
						</button>
					</form>
				</div>
			</StyledSearch>
		</Frame>
	);
}
