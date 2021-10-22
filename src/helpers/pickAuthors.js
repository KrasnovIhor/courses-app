const truncate = (str, n) => {
	return str.length > n ? str.substr(0, n - 1) + '...' : str;
};

export const pickAuthors = (
	courseAuthors = [],
	authorsList = [],
	isArray = false
) => {
	const authors = [];
	const names = [];

	courseAuthors.forEach((author) => {
		authorsList.forEach((item) => {
			if (item.id === author) {
				authors.push({
					name: item.name,
					id: item.id,
				});
				names.push(item.name);
			}
			// item.id === author &&
			// 	authors.push({
			// 		name: item.name,
			// 		id: item.id,
			// 	});
		});
	});

	const namesString = names.join(', ');

	return isArray ? authors : truncate(namesString, 35);
};
