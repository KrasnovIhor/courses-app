import { ADD_USER, DELETE_USER } from './actionTypes';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export default function userReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ADD_USER: {
			return {
				...state,
				...payload,
				isAuth: true,
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
