import React from "react";
import {
	canvasInfo,
	ballInfo,
	paddleInfo,
	info,
	bricksInfo,
	bricks,
} from "./interface";
import { draw } from "./draw";
import { keyDownHandle, keyUpHandle } from "./input";

export function Canvas() {
	return (
		<div>
			<canvas
				id="gameCanvas"
				width={window.innerWidth}
				height={window.innerHeight - 200}
				style={{ minHeight: 400, maxHeight: 1600 }}
			/>
		</div>
	);
}

export function game(getLeaderboard: any, setLeaderboard: any) {
	console.log("Gaming");
	getLeaderboard(setLeaderboard);
	const canvas: HTMLCanvasElement = document.getElementById(
		"gameCanvas"
	) as HTMLCanvasElement;
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
	const ballInfo: ballInfo = {
		r: 10,
		x: canvas.width / 2,
		y: (canvas.height * 3) / 4,
		dx: 2,
		dy: -2,
	};
	const canvasInfo: canvasInfo = {
		width: canvas.width,
		height: canvas.height,
	};
	const paddleInfo: paddleInfo = {
		h: 10,
		w: 75,
		x: 50,
		y: 50,
	};
	paddleInfo.x = (canvas.width - paddleInfo.w) / 2;
	paddleInfo.y = canvas.height - paddleInfo.h;
	const bricksInfo: bricksInfo = {
		rows: canvas.height / 175,
		cols: canvas.width / 90,
		w: 75,
		h: 30,
		p: 10,
		offT: 30,
		offL: 40,
	};
	let bricks: bricks[][] = [[]];
	for (var c = 0; c < bricksInfo.cols; c++) {
		bricks[c] = [];
		for (var r = 0; r < bricksInfo.rows; r++) {
			bricks[c][r] = { x: 0, y: 0, status: 1 };
		}
	}
	const info: info = {
		ctx: ctx,
		canvas: canvasInfo,
		ball: ballInfo,
		bricksInfo: bricksInfo,
		bricks: bricks,
		paddle: paddleInfo,
		score: 0,
		lives: 3,
		playerNum: 1,
	};
	document.addEventListener("keydown", keyDownHandle, false);
	document.addEventListener("keyup", keyUpHandle, false);
	let interval;
	info.interval = interval;
	interval = setInterval(draw, 10, info);
}
