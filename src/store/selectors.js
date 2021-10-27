export const getCourses = (state) => state.courses;
export const getCourse = (state, id) =>
	state.courses.find((course) => course.id === id);
export const getAuthors = (state) => state.authors;
export const getUser = (state) => state.user;
