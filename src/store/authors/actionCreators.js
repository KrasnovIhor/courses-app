import { ADD_AUTHOR, ADD_AUTHORS, DELETE_AUTHOR } from './actionTypes';

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
