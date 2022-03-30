//import * as React from 'react'
import {
	canvasInfo,
	ballInfo,
	paddleInfo,
	info,
	bricks,
	bricksInfo,
	gameInfo,
} from "./interface";
import { pressed } from "./input";
import { uploadScore } from "../../functions/firebase";

export function draw(
	info: info,
	setInfo: React.Dispatch<React.SetStateAction<gameInfo>>,
	gameInfo: gameInfo,
	changeName: Function
) {
	const ctx = info.ctx;
	const canvas = info.canvas;
	const paddle = info.paddle;
	const ball = info.ball;
	const bricks = info.bricks;
	const bricksInfo = info.bricksInfo;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks(ctx, bricks, bricksInfo);
	drawPaddle(ctx, paddle, canvas);
	drawBall(ctx, ball, canvas);
	if (ball.y + ball.dy < ball.r) {
		ball.dy = -ball.dy;
	} else if (ball.y + ball.dy > canvas.height - ball.r) {
		if (ball.x > paddle.x && ball.x < paddle.x + paddle.w) {
			ball.dy = -ball.dy;
		} else {
			let reloadRef = window.location.href;
			clearInterval(info.interval);
			setInfo({ state: "OVER", score: info.score });
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			setInfo({ state: "READY", score: info.score });
			uploadScore(info.name, info.score, changeName, reloadRef);
			ctx.font = "64px Arial";
			ctx.fillStyle = "#fff";
			ctx.fillText("GAME OVER!", 20, canvas.height / 3);
			ctx.fillText("Score: " + info.score, 20, (canvas.height * 2) / 3);
			ctx.font = "32px Arial";
			ctx.fillStyle = "#fff";
			ctx.fillText(
				"This page will reload once your score is uploaded",
				20,
				(canvas.height * 3) / 4
			);
		}
	}
	if (ball.x + ball.dx < ball.r || ball.x + ball.dx > canvas.width - ball.r) {
		ball.dx = -ball.dx;
	}
	info.score = collisionDetection(bricks, bricksInfo, ball, info.score);
	drawScore(ctx, info.score);
}

function drawBall(
	ctx: CanvasRenderingContext2D,
	ball: ballInfo,
	canvas: canvasInfo
) {
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
	ball.x += ball.dx;
	ball.y += ball.dy;
}

function drawPaddle(
	ctx: CanvasRenderingContext2D,
	paddle: paddleInfo,
	canvas: canvasInfo
) {
	ctx.beginPath();
	ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
	if (pressed.right) {
		paddle.x += 4;
		if (paddle.x + paddle.w > canvas.width) {
			paddle.x = canvas.width - paddle.w;
		}
	} else if (pressed.left) {
		paddle.x -= 4;
		if (paddle.x < 0) {
			paddle.x = 0;
		}
	}
}

function drawBricks(
	ctx: CanvasRenderingContext2D,
	bricks: bricks[][],
	info: bricksInfo
) {
	for (var c = 0; c < info.cols; c++) {
		for (var r = 0; r < info.rows; r++) {
			if (bricks[c][r].status === 1) {
				bricks[c][r].x = c * (info.w + info.p) + info.offL;
				bricks[c][r].y = r * (info.h + info.p) + info.offT;
				ctx.beginPath();
				ctx.rect(bricks[c][r].x, bricks[c][r].y, info.w, info.h);
				ctx.fillStyle = "#0095DD";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function collisionDetection(
	bricks: bricks[][],
	info: bricksInfo,
	ball: ballInfo,
	score: number
) {
	for (var c = 0; c < info.cols; c++) {
		for (var r = 0; r < info.rows; r++) {
			var b = bricks[c][r];
			if (
				ball.x > b.x &&
				ball.x < b.x + info.w &&
				ball.y > b.y &&
				ball.y < b.y + info.h &&
				b.status === 1
			) {
				ball.dy = -ball.dy;
				ball.dy = ball.dy * 1.05;
				ball.dx = ball.dx * 1.05;
				if (score % (info.cols * info.rows) === 0 && score !== 0) {
					b.status = 1;
				} else {
					b.status = 0;
				}
				score++;
			}
		}
	}
	return score;
}

function drawScore(ctx: CanvasRenderingContext2D, score: number) {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#fff";
	ctx.fillText("Score: " + score, 8, 20);
}
