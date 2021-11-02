/**
 *
 * @param {String} dateString
 * @returns {String}
 */
export const dateGenerator = (dateString) => {
	return dateString ? dateString.replace(/[/]/gm, '.') : '';
};
