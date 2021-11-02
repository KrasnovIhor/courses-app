import {
	ADD_AUTHOR,
	ADD_AUTHORS,
	DELETE_AUTHOR,
	FETCH_AUTHORS,
	LOADED_AUTHORS,
	RECEIVE_ERROR,
} from './actionTypes';

export const fetchingAuthors = () => {
	return {
		type: FETCH_AUTHORS,
	};
};

export const receivedError = () => {
	return {
		type: RECEIVE_ERROR,
	};
};

export const loadedAuthors = (authors) => {
	return {
		type: LOADED_AUTHORS,
		payload: authors,
	};
};

export const addAuthors = (authors) => {
	return {
		type: ADD_AUTHORS,
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
