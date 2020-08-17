import React from 'react';
import Menu from './containers/Menu'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import SplitPane from 'react-split-pane'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <SplitPane defaultSize={150}>
              <Menu/>
            <div id="page">
              <Route exact path="/" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </div>
          </SplitPane>
        </Router>
    </div>
  );
}

export default App;
