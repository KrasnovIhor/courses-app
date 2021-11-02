import {
	ADD_COURSE,
	FETCH_COURSES,
	RECEIVED_ERROR,
	DELETE_COURSE,
	UPDATE_COURSE,
	LOAD_COURSES,
} from './actionTypes';

export const fetchCourses = () => ({
	type: FETCH_COURSES,
});

export const loadCourses = (courses) => ({
	type: LOAD_COURSES,
	payload: courses,
});

export const receivedErrorCourses = () => ({
	type: RECEIVED_ERROR,
});

export const addCourse = (course) => ({
	type: ADD_COURSE,
	payload: course,
});

export const deleteCourse = (id) => ({
	type: DELETE_COURSE,
	payload: id,
});

export const updateCourse = (course) => ({
	type: UPDATE_COURSE,
	payload: course,
});
