import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Game} from './breakout/gameLogic'
import Breakout from './breakout/canvas'

ReactDOM.render(
  <React.StrictMode>
    <Breakout />
  </React.StrictMode>,
  document.getElementById('root')
)
Game();