import {
	ADD_COURSES,
	ADD_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

export const addCoursesAll = (courses) => {
	return {
		type: ADD_COURSES,
		payload: courses,
	};
};

export const addCourse = (course) => {
	return {
		type: ADD_COURSE,
		payload: course,
	};
};

export const deleteCourse = (id) => {
	return {
		type: DELETE_COURSE,
		payload: id,
	};
};

export const updateCourse = (course) => {
	return {
		type: UPDATE_COURSE,
		payload: course,
	};
};
