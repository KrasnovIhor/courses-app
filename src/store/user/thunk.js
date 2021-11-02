import { fetchUserService, login } from '../../services';

import { addUser, fetchUser, receiveError } from './actionCreators';

/**
 *
 * @param {String} token
 * @returns {Function}
 */
export const loadUser = (token) => {
	return async (dispatch) => {
		try {
			dispatch(fetchUser());

			const user = await fetchUserService(token);

			dispatch(addUser(user));
		} catch (error) {
			dispatch(receiveError());
			console.error(error);
		}
	};
};

/**
 *
 * @param {object} user
 * @returns {Function}
 */
export const loginThunk = (user) => {
	return async (dispatch) => {
		try {
			const response = await login(user);
			const {
				data: { result: token },
				status,
				successful,
			} = response;

			if (!successful && status !== 201) {
				alert('Failed to login!');
				return;
			}

			const userInfo = await fetchUserService(token);

			dispatch(addUser(userInfo));

			localStorage.setItem('token', token);
		} catch (error) {
			dispatch(receiveError());
			console.error(error);
		}
	};
};
