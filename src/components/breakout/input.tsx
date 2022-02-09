import * as React from 'react'
import {canvasInfo, ballInfo, paddleInfo, info} from './interface'

export const pressed = {
  right: false,
  left: false,
}

export function keyDownHandle (e: any) {
  if(e.key == "Right" || e.key == "ArrowRight") {
        pressed.right = true;
  } else if(e.key == "Left" || e.key == "ArrowLeft") {
        pressed.left = true;
  }
}

export function keyUpHandle (e: any) {
  if(e.key == "Right" || e.key == "ArrowRight") {
        pressed.right = false;
  } else if(e.key == "Left" || e.key == "ArrowLeft") {
        pressed.left = false;
  }
}