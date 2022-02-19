import { ReactElement } from "react";

export interface parentData {
	w: number;
	h: number;
}

export interface pages {
	labels: string[];
	pageNum: number[];
	element: ReactElement<any, any>[];
}

export interface experience {
	[key: string]: experienceTime;
}

export interface experienceTime {
	[key: string]: number;
}
