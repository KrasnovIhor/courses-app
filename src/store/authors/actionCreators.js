import {
	ADD_AUTHOR,
	DELETE_AUTHOR,
	FETCH_AUTHORS,
	LOAD_AUTHORS,
	RECEIVE_ERROR,
} from './actionTypes';

export const fetchAuthors = () => {
	return {
		type: FETCH_AUTHORS,
	};
};

export const receivedError = () => {
	return {
		type: RECEIVE_ERROR,
	};
};

export const loadAuthors = (authors) => {
	return {
		type: LOAD_AUTHORS,
		payload: authors,
	};
};

export const addAuthor = (author) => {
	return {
		type: ADD_AUTHOR,
		payload: author,
	};
};

export const deleteAuthor = (author) => {
	return {
		type: DELETE_AUTHOR,
		payload: author,
	};
};
