import React from 'react';
import Menu from './containers/Menu'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Resume from './containers/Resume'
import Blog from './containers/Blog'
import Contact from './containers/Contact'
import SplitPane from 'react-split-pane'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
