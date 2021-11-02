import {
	ADD_USER,
	FETCH_USER,
	DELETE_USER,
	RECEIVE_ERROR,
} from './actionTypes';

export const fetchUser = () => {
	return {
		type: FETCH_USER,
	};
};

/**
 *
 * @param {object} user
 * @returns {object}
 */
export const addUser = (user) => {
	return {
		type: ADD_USER,
		payload: user,
	};
};

export const receiveError = () => {
	return {
		type: RECEIVE_ERROR,
	};
};

export const deleteUser = () => {
	return {
		type: DELETE_USER,
	};
};
