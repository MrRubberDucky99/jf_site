import React from "react";
import { canvasInfo, ballInfo, paddleInfo, info } from "./interface";
import { draw } from "./draw";
//import { parentData } from "../../Interface";
import { keyDownHandle, keyUpHandle } from "./input";
//import { FunctionComponent } from "react";

export function Canvas() {
	return (
		<div>
			<canvas id="gameCanvas" width={window.innerWidth - 100} height={400} />
		</div>
	);
}

export function Game() {
	console.log("Gaming");
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
	//const bricks: bricksInfo = {

	//}
	const info: info = {
		ctx: ctx,
		canvas: canvasInfo,
		ball: ballInfo,
		//bricks: bricks,
		paddle: paddleInfo,
	};
	document.addEventListener("keydown", keyDownHandle, false);
	document.addEventListener("keyup", keyUpHandle, false);
	let interval;
	info.interval = interval;
	interval = setInterval(draw, 10, info);
}
