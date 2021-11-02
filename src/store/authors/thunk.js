import { addAuthorService, fetchAuthorsService } from '../../services';

import {
	loadAuthors,
	receivedError,
	fetchAuthors,
	addAuthor,
} from './actionCreators';

export const fetchAuthorsThunk = async (dispatch) => {
	try {
		dispatch(fetchAuthors());

		const {
			data: { result },
		} = await fetchAuthorsService();

		dispatch(loadAuthors(result));
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
