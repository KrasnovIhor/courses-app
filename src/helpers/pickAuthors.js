/**
 *
 * @param {String} str
 * @param {Number} n
 * @returns {String}
 */

const truncate = (str, n) => {
	return str.length > n ? str.substr(0, n - 1) + '...' : str;
};

/**
 *
 * @param {Array<string>} courseAuthors
 * @param {Array<object>} authorsList
 * @returns {Array<object>}
 */
export const pickAuthors = (courseAuthors = [], authorsList = []) => {
	return courseAuthors.map((id) => {
		const author = authorsList.find((obj) => obj.id === id);
		if (!author) return { id: 0, name: 'Invalid author' };
		return author;
	});
};

/**
 *
 * @param {Array<string>} courseAuthors
 * @param {Array<object>} authorsList
 * @returns {String}
 */

export const pickAuthorsToString = (courseAuthors = [], authorsList = []) => {
	return truncate(
		pickAuthors(courseAuthors, authorsList)
			.map((authorObj) => authorObj.name)
			.join(', '),
		35
	);
};
