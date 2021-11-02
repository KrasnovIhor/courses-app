import axios from 'axios';
import { API } from '../../constants';

import {
	deleteCourseService,
	fetchCourseAdd,
	updateCourseService,
} from '../../services';

import {
	addCourse,
	fetchCourses,
	receivedErrorCourses,
	deleteCourse,
	loadCourses,
	updateCourse,
} from './actionCreators';

export const fetchCoursesThunk = async (dispatch) => {
	try {
		dispatch(fetchCourses());

		const response = await axios.get(`${API}/courses/all`);
		const {
			data: { result: courses },
		} = response;

		dispatch(loadCourses(courses));
	} catch (error) {
		dispatch(receivedErrorCourses());
		console.error(error);
	}
};

export const addCourseThunk = (course, token) => {
	return async (dispatch) => {
		try {
			const response = await fetchCourseAdd(course, token);
			const {
				data: { successful, result },
				status,
			} = response;

			if (!successful && status !== 201) {
				alert('Course was not added');
				return;
			}

			dispatch(addCourse(result));
		} catch (error) {
			console.error(error);
		}
	};
};

export const updateCourseThunk = (id, course, token) => {
	return async (dispatch) => {
		try {
			const response = await updateCourseService(id, course, token);
			const {
				data: { successful, result },
				status,
			} = response;

			if (!successful && status !== 201) {
				alert('Course was not added');
				return;
			}

			dispatch(updateCourse(result));
		} catch (error) {
			console.error(error);
		}
	};
};

export const deleteCourseThunk = (id, token) => {
	return async (dispatch) => {
		try {
			await deleteCourseService(id, token);

			dispatch(deleteCourse(id));
		} catch (error) {
			console.error(error);
		}
	};
};
