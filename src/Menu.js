import React from 'react'
import "./Menu.css"
import chessbattery from "./assets/chessbattery-1.png"

const Menu = ({currentLink}) => {
  return(
    <div id="menu">
      <div id="options">
        <h2>PORTFOLIO</h2>
        <ul>
          <li><button className="option">CHESS_BATTERY</button></li>
          <li><button className="option">STOCKER</button></li>
          <li><button className="option">PRO_BUILD</button></li>
        </ul>
      </div>
      <div id="info">
        <h2>CHESS BATTERY</h2>
        <img src={chessbattery} alt="h" />
        <p>chessbattery is a website to teach beginners not only the what, but the why behind basic starting moves.</p>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul>
          <li>chess.js</li>
          <li>stockfish.js</li>
          <li>chessground.js</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;