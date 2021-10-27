import { ADD_AUTHOR, ADD_AUTHORS, DELETE_AUTHOR } from './actionTypes';

const initialState = [];

export default function authorsReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case ADD_AUTHORS:
			return [...state, ...payload];
		case ADD_AUTHOR:
			return [...state, payload];
		case DELETE_AUTHOR:
			return state.filter((author) => author.id !== payload.id);
		default:
			return state;
	}
}
