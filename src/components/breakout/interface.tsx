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
	offB: number;
}

export interface info {
	ctx: CanvasRenderingContext2D;
	canvas: canvasInfo;
	ball: ballInfo;
	//ballBack: ballInfo
	paddle: paddleInfo;
	//bricks: bricksInfo
	interval?: any;
}
