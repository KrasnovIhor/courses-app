export const getCourses = ({ courses: { courses } }) => courses;
export const isFetchingCourses = ({ courses }) => courses.isFetching;
export const isErrorCourses = ({ courses }) => courses.isError;
export const getCourse = ({ courses: { courses } }, id) =>
	courses.find((course) => course.id === id);
export const getAuthors = ({ authors: { authors } }) => authors;
export const getUser = ({ user }) => user;
