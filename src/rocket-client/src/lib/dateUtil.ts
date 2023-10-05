export const getRandomDate = (
	start: Date = new Date(2010, 0, 1),
	end: Date = new Date(2023, 3, 1)
): Date => {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
