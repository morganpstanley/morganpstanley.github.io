import React, { useEffect, useState } from 'react'
import './App.css'
import useSound from 'use-sound';
import audioClick from "./assets/button-50.mp3"

const Home = () => {

  const [about, setAbout] = useState(false)

  useEffect(() => {
    startTimers()
  }, [])

  const startTimers = () => {
    setTimeout(() => document.getElementById("morgan").classList.add("appear"), 2000);
    setTimeout(() => document.getElementById("stanley").classList.add("appear"), 2500);
    setTimeout(() => document.getElementById("line").classList.add("long"), 2000);
    setTimeout(() => document.getElementById("blog").classList.add("appear"), 3030);
    setTimeout(() => document.getElementById("about").classList.add("appear"), 3700);
    setTimeout(() => document.getElementById("resume").classList.add("appear"), 4100);
    setTimeout(() => document.getElementById("contact").classList.add("appear"), 4500);
    setTimeout(() => document.getElementById("portfolio").classList.add("appear"), 4900);
  }

  const handlePortfolio = () => {
    document.getElementById("portfolio").classList.remove("appear")
    document.getElementById("morgan").classList.remove("appear")
    document.getElementById("stanley").classList.remove("appear")
    document.getElementById("line").classList.remove("long")
    document.getElementById("about").classList.remove("appear")
    document.getElementById("blog").classList.remove("appear")
    document.getElementById("resume").classList.remove("appear")
    document.getElementById("contact").classList.remove("appear")
  }

  const handleAbout = () => {
    if (about) {
      document.getElementById("portfolio").classList.add("appear")
      document.getElementById("morgan").classList.add("appear")
      document.getElementById("stanley").classList.add("appear")
      document.getElementById("line").classList.add("long")
      document.getElementById("blog").classList.add("appear")
      document.getElementById("resume").classList.add("appear")
      document.getElementById("contact").classList.add("appear")
      document.getElementById("about").classList.remove("moveabout")
      document.getElementById("contact").classList.add("appear")
      document.getElementById("line2").classList.remove("long2")
      document.getElementById("about").classList.remove("move2")
      setAbout(false)
    } else {
      document.getElementById("portfolio").classList.remove("appear")
      document.getElementById("morgan").classList.remove("appear")
      document.getElementById("stanley").classList.remove("appear")
      document.getElementById("line").classList.remove("long")
      document.getElementById("blog").classList.remove("appear")
      document.getElementById("resume").classList.remove("appear")
      document.getElementById("contact").classList.remove("appear")
      document.getElementById("about").classList.add("moveabout")
      document.getElementById("contact").classList.remove("appear")
      document.getElementById("line2").classList.add("long2")
      document.getElementById("about").classList.add("move2")
      setAbout(true)
    }
  }

  const [playClick] = useSound(
    audioClick,
    { volume: 0.25 }
  );

  return(
    <div id="container">
      <div id='logo'>
        <div id='morgan'>MORGAN</div>
        <div id='stanley'>STA LEY</div>
        <hr id='line' />
      </div>
      <nav id="nav">
        <button id='blog'  onMouseEnter={playClick}>BLOG</button>
        <div id='line2' />
        <button id='about' onMouseEnter={playClick} onClick={handleAbout}>ABOUT</button>
        <button id='resume' onMouseEnter={playClick}>RESUME</button>
        <button id='contact' onMouseEnter={playClick}>CONTACT</button>
        <button id='portfolio' onMouseEnter={playClick} onClick={handlePortfolio}>PORTFOLIO</button>
      </nav>
    </div>
  )
}

export default Home;