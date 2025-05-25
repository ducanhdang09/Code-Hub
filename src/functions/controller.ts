const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getRandomArrayItem = (arr: any[]) => {
	return arr[getRandomNumber(0, arr.length - 1)];
};
