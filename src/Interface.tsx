export interface page {
	longTitle: string;
	construction: boolean;
}

export interface pages {
	navigation: navigationPages;
	data: pagesList;
}

export interface pagesList {
	[key: string]: page;
}

export interface navigationPages {
	[key: string]: pageNavigationInfo;
}

export interface pageNavigationInfo {
	address: string;
	displayName: string;
	hidden: boolean;
	priority: number;
}

export interface experience {
	[key: string]: experienceTime;
}

export interface experienceTime {
	[key: string]: number;
}
