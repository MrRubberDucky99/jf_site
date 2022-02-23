import * as React from "react";

export interface canvasInfo {
	width: number;
	height: number;
}

export interface ballInfo {
	r: number;
	x: number;
	y: number;
	dx: number;
	dy: number;
}

export interface paddleInfo {
	h: number;
	w: number;
	x: number;
	y: number;
}

export interface bricksInfo {
	rows: number;
	cols: number;
	w: number;
	h: number;
	p: number;
	offT: number;
	offL: number;
}

export interface bricks {
	x: number;
	y: number;
	status: number;
}

export interface info {
	ctx: CanvasRenderingContext2D;
	canvas: canvasInfo;
	ball: ballInfo;
	//ballBack: ballInfo
	paddle: paddleInfo;
	bricks: bricks[][];
	bricksInfo: bricksInfo;
	interval?: any;
}
