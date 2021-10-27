import { ADD_USER, ADD_USER_REQUEST, DELETE_USER } from './actionTypes';

const initialState = {
	isAuth: false,
	isUserLoaded: true,
	name: '',
	email: '',
	token: '',
};

export default function userReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ADD_USER_REQUEST:
			return {
				...state,
				isUserLoaded: false,
			};
		case ADD_USER: {
			return {
				...state,
				...payload,
				isAuth: true,
				isUserLoaded: true,
			};
		}
		case DELETE_USER:
			return {
				...initialState,
			};
		default:
			return state;
	}
}
