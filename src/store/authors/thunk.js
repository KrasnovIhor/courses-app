import { addAuthorService, fetchAuthors } from '../../services';

import {
	loadedAuthors,
	receivedError,
	fetchingAuthors,
	addAuthor,
} from './actionCreators';

export const fetchAuthorsThunk = async (dispatch) => {
	try {
		dispatch(fetchingAuthors());

		const {
			data: { result },
		} = await fetchAuthors();

		dispatch(loadedAuthors(result));
	} catch (error) {
		dispatch(receivedError());
		console.error(error);
	}
};

/**
 *
 * @param {string} name
 * @param {string} token
 * @returns
 */
export const addAuthorThunk = (name, token) => {
	return async (dispatch) => {
		try {
			const {
				data: { result },
			} = await addAuthorService(name, token);

			dispatch(addAuthor(result));
		} catch (error) {
			console.error(error);
		}
	};
};
