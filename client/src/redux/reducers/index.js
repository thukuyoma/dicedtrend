import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducers';
import postReducers from './postReducers';
import assetReducers from './assetReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};
// export default combineReducers({
const rootReducer = combineReducers({
	alerts: alertReducer,
	auth: authReducer,
	post: postReducers,
	asset: assetReducers,
});
export default persistReducer(persistConfig, rootReducer);
