import { ADD_USER, ADD_USER_REQUEST, DELETE_USER } from './actionTypes';

export const addUser = (user) => {
	return {
		type: ADD_USER,
		payload: user,
	};
};

export const deleteUser = () => {
	return {
		type: DELETE_USER,
	};
};

export const addUserRequest = () => {
	return {
		type: ADD_USER_REQUEST,
	};
};
