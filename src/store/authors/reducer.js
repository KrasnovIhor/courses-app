import {
	ADD_AUTHOR,
	ADD_AUTHORS,
	DELETE_AUTHOR,
	FETCH_AUTHORS,
	LOADED_AUTHORS,
	RECEIVE_ERROR,
} from './actionTypes';

const initialState = {
	authors: [],
	isFetching: false,
	isError: false,
};

export default function authorsReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case FETCH_AUTHORS:
			return {
				...state,
				isFetching: true,
			};
		case LOADED_AUTHORS:
			return {
				...state,
				isFetching: false,
				isError: false,
				authors: payload,
			};
		case ADD_AUTHORS:
			return {
				...state,
				authors: [...state.authors, ...payload],
			};
		case ADD_AUTHOR:
			return {
				...state,
				authors: [...state.authors, payload],
			};
		case DELETE_AUTHOR:
			return {
				...state,
				authors: state.authors.filter((author) => author.id !== payload.id),
			};
		case RECEIVE_ERROR:
			return {
				...state,
				isError: true,
			};
		default:
			return state;
	}
}
