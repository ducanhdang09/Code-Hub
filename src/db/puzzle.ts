type PuzzleLength = {
	easy: number;
	medium: number;
	hard: number;
	[key: string]: number;
};

export enum EMode {
	EASY,
	MEDIUM,
	HARD,
}

export const checkEqualPuzzle = (puzzle1: readonly number[], puzzle2: number[]) => {
	for (let i = 0; i < puzzle1.length; i++) {
		if (puzzle1[i] !== puzzle2[i]) return false;
	}
	return true;
};

export const finishPuzzle = {
	[EMode.EASY]: [0, 1, 2, 3],
	[EMode.MEDIUM]: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	[EMode.HARD]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

export const puzzleLength: PuzzleLength = {
	easy: 4,
	medium: 9,
	hard: 16,
};

export const randomPuzzle = {
	[EMode.EASY]: [
		[0, 2, 1, 3],
		[0, 3, 1, 2],
	],
	[EMode.MEDIUM]: [
		[0, 2, 8, 1, 5, 4, 7, 3, 6],
		[0, 6, 5, 2, 7, 8, 4, 1, 3],
		[0, 8, 3, 5, 6, 2, 4, 7, 1],
		[0, 6, 3, 8, 7, 1, 5, 2, 4],
		[0, 8, 1, 5, 3, 4, 6, 7, 2],
		[0, 1, 4, 8, 5, 2, 6, 3, 7],
	],
	[EMode.HARD]: [
		[0, 5, 2, 3, 8, 4, 1, 7, 9, 10, 6, 11, 12, 13, 14, 15],
		[0, 8, 2, 3, 4, 5, 1, 6, 9, 13, 11, 7, 12, 14, 10, 15],
		[0, 4, 8, 3, 9, 13, 2, 1, 12, 11, 5, 6, 14, 10, 15, 7],
	],
};

export const modePuzzle = (mode: string) => {
	const n = puzzleLength[mode];
	return Array.from({ length: n }, (_, index) => index);
};

export interface IPuzzle {
	id: number;
	image: string;
	mode: EMode;
	result: string[];
}

export const puzzleData: IPuzzle[] = [
	{
		id: 1,
		image: "https://i2.wp.com/blog.electricbricks.com/wp-content/uploads/2019/01/Banner-Blog-SCRATCH.jpg?fit=650%2C340",
		mode: EMode.EASY,
		result: ["1", "8", "3"],
	},
	{
		id: 4,
		image: "https://demo.org.vn/wp-content/uploads/2021/03/1-co-bao-nhieu-hanh-tinh-trong-he-mat-troi.jpg",
		mode: EMode.EASY,
		result: ["9", "2", "10"],
	},
	{
		id: 2,
		image: "https://lh3.googleusercontent.com/proxy/hHhQ34i3uDWO1apOJ-Cv7J0WkZsaduV1p97VYWhgIoHoYFxexkSTz7nP7Was_XLenCA_M1kooIbOjhRupif586CVJP7vm_OcoNd4jEwGjzTD_A_DFdiGJ8IW0GU801WAbk-dt7jqKZ7GcGQtW7S2xIBXZOUo",
		mode: EMode.MEDIUM,
		result: ["5", "3", "2"],
	},
	{
		id: 3,
		image: "https://vnn-imgs-f.vgcloud.vn/2018/02/02/15/kham-pha-vong-trong-he-ma-t-tro-i-phan-2.jpg",
		mode: EMode.HARD,
		result: ["7", "10", "9"],
	},
];
