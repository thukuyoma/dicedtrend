import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import CreatePost from './components/pages/CreatePost';
import Alert from './components/assets/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/pages/Profile';
import EditPost from './components/pages/EditPost';
import AccountContainer from './components/layout/profile/AccountContainer';

import { loadUser } from './redux/actions/authActions';
import { store } from './redux/store';
import setAuthToken from './utils/setAuthToken';
import SearchResult from './components/pages/SearchResult';
import ForgotPassword from './components/auth/ForgotPassword';
function App() {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUser());
	}, []);
	return (
		<Router>
			<Fragment>
				<Alert />
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route eaxct path="/posts/:id" component={Post} />
				<Route eaxct path="/profile" component={Profile} />
				<Route eaxct path="/create-post/" component={CreatePost} />
				<Route eaxct path="/account-container/" component={AccountContainer} />
				<Route eaxct path="/edit-post/:user_post_id" component={EditPost} />
				<Route eaxct path="/search-result" component={SearchResult} />
				<Route eaxct path="/forgot-password" component={ForgotPassword} />
			</Fragment>
		</Router>
	);
}

export default App;
