import * as React from 'react'
import {canvasInfo, ballInfo, paddleInfo, info} from './interface'
import {pressed} from './input'

export function draw(info: info) {
  const ctx = info.ctx;
  const canvas = info.canvas;
  const paddle = info.paddle;
  const ball = info.ball;
  const ballBack: ballInfo = {
    r: 10,
    x: (canvas.width/2),
    y: canvas.height*3/4,
    dx: 2,
    dy: -2,
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle(ctx, paddle, canvas)
  drawBall(ctx, ball, canvas)
  if(ball.y + ball.dy < ball.r) { ball.dy = -ball.dy; } else if (ball.y + ball.dy > canvas.height-ball.r) {
    if(ball.x > paddle.x && ball.x < paddle.x + paddle.w) {
        ball.dy = -ball.dy;
    }
    else {
      info.ball = ballBack;
      //alert("GAME OVER");
      //document.location.reload();
      clearInterval(info.interval);
    }
  }
  if(ball.x + ball.dx < ball.r || ball.x + ball.dx > canvas.width-ball.r) { ball.dx = -ball.dx; }
}

function drawBall(ctx: CanvasRenderingContext2D, ball: ballInfo, canvas: canvasInfo){
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function drawPaddle(ctx: CanvasRenderingContext2D, paddle: paddleInfo, canvas: canvasInfo) {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  if(pressed.right) {
    paddle.x += 4;
    if (paddle.x + paddle.w > canvas.width){ paddle.x = canvas.width - paddle.w; }
  } else if(pressed.left) {
    paddle.x -= 4;
    if (paddle.x < 0){ paddle.x = 0; }
  }
}
