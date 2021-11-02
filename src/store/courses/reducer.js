import {
	ADD_COURSE,
	FETCH_COURSES,
	RECEIVED_ERROR,
	DELETE_COURSE,
	UPDATE_COURSE,
	LOAD_COURSES,
} from './actionTypes';

const initialState = {
	courses: [],
	isFetching: false,
	isError: false,
};

export default function coursesReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case FETCH_COURSES:
			return {
				...state,
				isFetching: true,
			};
		case LOAD_COURSES:
			return {
				...state,
				courses: payload,
				isFetching: false,
				isError: false,
			};
		case RECEIVED_ERROR:
			return {
				...state,
				isError: true,
			};
		case ADD_COURSE:
			return { ...state, courses: [...state.courses, payload] };
		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== payload),
			};
		case UPDATE_COURSE:
			const courseIndex = state.courses.findIndex(
				(course) => course.id === payload.id
			);

			return {
				...state,
				courses: state.courses.map((course, i) =>
					i === courseIndex ? (course[courseIndex] = payload) : course
				),
			};
		default:
			return state;
	}
}
