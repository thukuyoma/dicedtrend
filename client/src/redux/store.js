import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import setAuthToken from '../utils/setAuthToken';
import { persistStore } from 'redux-persist';

const initialState = {};
const middleware = [thunk];
export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

let currentState = {
	auth: {
		token: null,
		isAuthenticated: false,
		isLoading: true,
		user: null,
	},
};

store.subscribe(() => {
	let previousState = currentState;
	currentState = store.getState();
	if (previousState.auth.token !== currentState.auth.token) {
		const token = currentState.auth.token;
		setAuthToken(token);
	}
});

export const persistor = persistStore(store);
// export default () => {
// 	store;
// 	let persistor = persistStore(store);
// 	return { store, persistor };
// };
