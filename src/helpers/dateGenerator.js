export const dateGenerator = (dateString) => {
	return dateString ? dateString.replace(/[/]/gm, '.') : '';
};
