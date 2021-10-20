export const pipeDuration = (duration) => {
	const hours = duration / 60,
		rhours = formatNumber(Math.floor(hours)),
		minutes = (hours - rhours) * 60,
		rminutes = formatNumber(Math.round(minutes));

	return `${rhours}:${rminutes}`;
};

const formatNumber = (number) => {
	return number.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
};
