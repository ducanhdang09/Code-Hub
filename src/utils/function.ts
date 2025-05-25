export function getRandomArray(arr: any[], numberOfElements: number) {
	const shuffled = arr.sort(() => Math.random() - 0.5);
	return shuffled.slice(0, numberOfElements);
}

export function getRandomElement(arr: string[]) {
	if (arr.length === 0) {
		throw new Error("Array is empty");
	}
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}
