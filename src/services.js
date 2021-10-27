import axios from 'axios';
import { API } from './constants';

export const fetchUser = async (token) => {
	try {
		const response = await axios.get(`${API}/users/me`, {
			headers: {
				Authorization: token,
			},
		});

		const user = {
			...response.data.result,
			token,
		};

		return user;
	} catch (error) {
		console.error(error);
	}
};

export const fetchCoursesAll = async () => {
	try {
		const response = await axios.get(`${API}/courses/all`);
		const {
			data: { result: courses },
		} = response;

		return courses;
	} catch (error) {
		console.error(error);
	}
};

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
};

export const fetchCourseAdd = async (course) => {
	try {
		const response = await axios.post(`${API}/courses/add`, course);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};

export const fetchAuthors = async () => {
	try {
		const response = await axios.get(`${API}/authors/all`);

		return response.data.result;
	} catch (error) {
		console.error(error);
	}
};

export const registration = async (newUser) => {
	try {
		const response = await axios.post(`${API}/register`, newUser);

		return response;
	} catch (error) {
		alert('Something went wrong!');

		console.error(error);
	}
};

export const login = async (user) => {
	try {
		const response = await axios.post(`${API}/login`, user);

		return response;
	} catch (error) {
		alert('Failed to login');

		console.error(error);
	}
};

export const logout = async (token) => {
	await axios.delete(`${API}/logout`, {
		headers: {
			Authorization: token,
		},
	});
};
