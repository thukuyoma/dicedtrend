import { SHOW_SEARCH } from '../actions/types';

const initialState = {
	showSearchBox: false,
	newsletter: true,
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case SHOW_SEARCH:
			return { ...state, showSearchBox: !state.showSearchBox };
		default:
			return state;
	}
}
