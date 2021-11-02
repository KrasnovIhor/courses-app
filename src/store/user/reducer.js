import {
	ADD_USER,
	RECEIVE_ERROR,
	FETCH_USER,
	DELETE_USER,
} from './actionTypes';

const initialState = {
	isAuth: false,
	isFetching: false,
	isError: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export default function userReducer(state = initialState, { type, payload }) {
	switch (type) {
		case FETCH_USER:
			return {
				...state,
				isFetching: true,
			};
		case ADD_USER: {
			return {
				...state,
				...payload,
				isAuth: true,
				isFetching: false,
			};
		}
		case RECEIVE_ERROR:
			return {
				...state,
				isError: true,
			};
		case DELETE_USER:
			return {
				...initialState,
			};
		default:
			return state;
	}
}
