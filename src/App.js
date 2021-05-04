import React, { Component } from 'react'
import Menu from "./Menu"
import Home from "./Home"

class App extends Component {

  state = {
    menu: false
  }

  changeOption = () => {
    if (this.state.menu) {
      return "none"
    } else {
      return "block"
    }
  }

  changeOption2 = () => {
    if (this.state.menu) {
      return "block"
    } else {
      return "none"
    }
  }

  render() {
    return(
      <div className="App">
        <button onClick={() => this.setState({menu: !this.state.menu})}>change</button>
        <div style={{display:this.changeOption()}}><Home /></div>
        <div style={{display:this.changeOption2()}}><Menu /></div>
      </div>
    )
  }
}

export default App;
