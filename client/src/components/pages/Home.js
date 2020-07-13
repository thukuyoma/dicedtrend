import React, { useEffect } from 'react';
import { Main, Aside, Frame } from '../assets/Layout';
import styled from 'styled-components';
import { getPosts } from '../../redux/actions/postActions';
//Component
import Header from '../layout/navigation/Header';
import Footer from '../layout/navigation/Footer';
import HeroSide from '../layout/Home/HeroSide';
import HeroMain from '../layout/Home/HeroMain';
import { PostCard } from '../layout/Home/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import Ad from '../layout/aside/Ad';
import Slider from '../layout/aside/Slider';
import CatList from '../layout/aside/CatList';
import Newsletter from '../layout/aside/Newsletter';
import PopularPost from '../layout/aside/PopularPost';
import Search from '../layout/navigation/Search';
import SubHeading from '../layout/aside/SubHeading';
const Hero = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(261px, 1fr));
	justify-content: center;
	grid-gap: 15px;
	width: 100%;
	margin-bottom: 30px;
`;

function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());
	}, [getPosts]);

	const posts = useSelector((state) => state.post.posts);
	return (
		<div>
			<Header />
			{/* <Search /> */}
			<Frame>
				<Main>
					<Hero>
						<HeroMain />
						<HeroSide />
					</Hero>
					<h1>Diced posts</h1>
					{posts.map((post) => (
						<PostCard home post={post} key={post._id} />
					))}
				</Main>
				<Aside>
					<Slider />
					<SubHeading heading="Popular" />
					<PopularPost />
					<Ad />
					<Newsletter />
					<SubHeading heading="Categories" />
					<CatList />
				</Aside>
			</Frame>
			<Footer />
		</div>
	);
}
export default Home;
