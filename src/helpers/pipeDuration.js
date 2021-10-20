export const pipeDuration = (duration) => {
	const hours = duration / 60,
		rhours = Math.floor(hours),
		minutes = (hours - rhours) * 60,
		rminutes = Math.round(minutes);

	return `${rhours}:${rminutes}`;
};
