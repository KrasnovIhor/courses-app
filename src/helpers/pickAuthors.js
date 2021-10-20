const truncate = (str, n) => {
	return str.length > n ? str.substr(0, n - 1) + '...' : str;
};

export const pickAuthors = (courseAuthors, authorsList) => {
	const names = [];

	courseAuthors.forEach((author) => {
		authorsList.forEach((item) => {
			item.id === author && names.push(item.name);
		});
	});

	const namesString = names.join(', ');

	return truncate(namesString, 35);
};
