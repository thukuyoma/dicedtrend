import React, { Fragment, useEffect } from 'react';
import Header from '../layout/navigation/Header';
import Footer from '../layout/navigation/Footer';
import { Main, Frame, Aside } from '../assets/Layout';
import { PostCard } from '../layout/Home/PostCard';
import { useSelector, useDispatch } from 'react-redux';
// import Spinner from '../assets/Spinner';
// import { showSearchBox } from '../../redux/actions/assetActions';
export default function SearchResult() {
	const searchedPost = useSelector((state) => state.post.searchedPosts);
	const dispatch = useDispatch();

	return (
		<Fragment>
			<Header />
			<Frame>
				<Main>
					{/* {searchedPost === null && <Spinner />} */}
					{searchedPost !== null && searchedPost.length > 0 ? (
						<Fragment>
							<h4>These posts match your search query</h4>
							{searchedPost.map((post) => (
								<PostCard post={post} />
							))}
						</Fragment>
					) : (
						<Fragment>
							<h5>
								Sorry your search query did not match any article or news,
								please try again
							</h5>
						</Fragment>
					)}
				</Main>
				<Aside></Aside>
			</Frame>
			<Footer />
		</Fragment>
	);
}
