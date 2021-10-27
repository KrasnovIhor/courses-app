import {
	ADD_COURSES,
	ADD_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

const initialState = [];

export default function coursesReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case ADD_COURSES:
			return [...payload];
		case ADD_COURSE:
			return [...state, payload];
		case DELETE_COURSE:
			return state.filter((course) => course.id !== payload);
		case UPDATE_COURSE:
			return [state.filter((course) => course.id !== payload.id), payload];
		default:
			return state;
	}
}
