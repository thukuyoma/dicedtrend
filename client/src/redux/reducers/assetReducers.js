import { showSearchBox } from '../actions/assetActions';
import { SHOW_SEARCH } from '../actions/types';

const initialState = {
	showSearchBox: false,
	newsletter: true,
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case SHOW_SEARCH:
			return { ...state, showSearchBox: !state.showSearchBox };
		// return { ...state, showSearchBox: !showSearchBox };
		default:
			return state;
	}
}
