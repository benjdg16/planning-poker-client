export const FIBONACCI = "FIBONACCI";
export const MODIFIED_FIBONACCI = "MODIFIED_FIBONACCI";
export const TSHIRT = "TSHIRT";
export const POWERS_OF_TWO = "POWERS_OF_TWO";
export const CUSTOM = "CUSTOM";

export const VALUE_QUESTION_MARK = "question_mark";
export const VALUE_COFFEE = "coffee";

export type TCardType =
	| typeof FIBONACCI
	| typeof MODIFIED_FIBONACCI
	| typeof TSHIRT
	| typeof POWERS_OF_TWO
	| typeof CUSTOM;

export type TCardValue = string | number;

export type TCards = Record<TCardType, { values: Array<TCardValue> | null }>;

export const DEFAULT_CARDS: TCards = {
	[FIBONACCI]: {
		values: [
			0,
			1,
			2,
			3,
			5,
			8,
			13,
			21,
			34,
			55,
			89,
			VALUE_QUESTION_MARK,
			VALUE_COFFEE,
		],
	},
	[MODIFIED_FIBONACCI]: {
		values: [
			0,
			0.5,
			1,
			2,
			3,
			5,
			8,
			13,
			20,
			40,
			100,
			VALUE_QUESTION_MARK,
			VALUE_COFFEE,
		],
	},
	[TSHIRT]: {
		values: [
			"xxs",
			"xs",
			"s",
			"m",
			"l",
			"xl",
			"xxl",
			VALUE_QUESTION_MARK,
			VALUE_COFFEE,
		],
	},
	[POWERS_OF_TWO]: {
		values: [0, 1, 2, 4, 8, 16, 32, 64, VALUE_QUESTION_MARK, VALUE_COFFEE],
	},
	[CUSTOM]: {
		values: null,
	},
};
