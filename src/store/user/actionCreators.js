import {
	ADD_USER,
	ADD_USER_REQUEST,
	DELETE_USER,
	ADD_USER_REJECT,
} from './actionTypes';

export const addUserRequest = () => {
	return {
		type: ADD_USER_REQUEST,
	};
};

export const addUser = (user) => {
	return {
		type: ADD_USER,
		payload: user,
	};
};

export const addUserReject = () => {
	return {
		type: ADD_USER_REJECT,
	};
};

export const deleteUser = () => {
	return {
		type: DELETE_USER,
	};
};
