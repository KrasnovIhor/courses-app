import axios from 'axios';
import { API } from './constants';

/**
 *
 * @param {String} token
 * @returns {Promise<object>}
 */
export const fetchUserService = async (token) => {
	try {
		const {
			data: { result },
		} = await axios.get(`${API}/users/me`, {
			headers: {
				Authorization: token,
			},
		});

		const user = {
			...result,
			token,
		};

		return user;
	} catch (error) {
		console.error(error);
	}

	return {};
};

/**
 *
 * @returns {Promise<[object]>}
 */
export const fetchCoursesThunkAll = async () => {
	try {
		const response = await axios.get(`${API}/courses/all`);
		const {
			data: { result: courses },
		} = response;

		return courses;
	} catch (error) {
		console.error(error);
	}
	return [];
};

/**
 *
 * @param {String} id
 * @returns {Promise<object>}
 */

export const fetchCourse = async (id) => {
	try {
		const response = await axios.get(`${API}/courses/${id}`);
		const {
			data: { result },
		} = response;
		const course = result;

		return course;
	} catch (error) {
		console.error(error);
	}
	return {};
};

/**
 *
 * @param {object} course
 * @returns {Promise<object>}
 */
export const fetchCourseAdd = async (course, token) => {
	try {
		const headers = {
			Authorization: token,
		};

		const response = await axios.post(`${API}/courses/add`, course, {
			headers,
		});

		return response;
	} catch (error) {
		console.error(error);
	}
};

/**
 *
 * @param {String} id
 * @param {object} course
 * @param {String} token
 * @returns {Promise<object>}
 */
export const updateCourseService = async (id, course, token) => {
	try {
		const headers = {
			Authorization: token,
		};

		const response = await axios.put(`${API}/courses/${id}`, course, {
			headers,
		});

		return response;
	} catch (error) {
		console.error(error);
	}
};

/**
 *
 * @param {String} id
 * @param {String} token
 * @returns {Promise<object>}
 */
export const deleteCourseService = async (id, token) => {
	try {
		const headers = {
			Authorization: token,
		};

		const response = await axios.delete(`${API}/courses/${id}`, { headers });

		return response;
	} catch (error) {
		console.error(error);
	}
	return {};
};

/**
 *
 * @returns {Promise<array>}
 */

export const fetchAuthors = async () => {
	try {
		const response = await axios.get(`${API}/authors/all`);

		return response;
	} catch (error) {
		console.error(error);
	}
	return [];
};

export const addAuthorService = async (name, token) => {
	try {
		const headers = {
			Authorization: token,
		};

		const response = await axios.post(
			`${API}/authors/add`,
			{ name },
			{ headers }
		);

		return response;
	} catch (error) {
		console.error(error);
	}
};

/**
 *
 * @param {Object} newUser
 * @returns {Promise<object>}
 */
export const registration = async (newUser) => {
	try {
		const response = await axios.post(`${API}/register`, newUser);

		return response;
	} catch (error) {
		alert('Something went wrong!');

		console.error(error);
	}
	return {};
};

/**
 *
 * @param {Object} user
 * @returns {Promise<object>}
 */
export const login = async (user) => {
	try {
		const response = await axios.post(`${API}/login`, user);

		return response;
	} catch (error) {
		alert('Failed to login');

		console.error(error);
	}
	return {};
};

/**
 *
 * @param {String} token
 */
export const logout = async (token) => {
	try {
		await axios.delete(`${API}/logout`, {
			headers: {
				Authorization: token,
			},
		});
	} catch (error) {
		console.error(error);
	}
};
