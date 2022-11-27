import React from "react";
import "./App.css"

class App extends React.Component {
  constructor() {
    super()

    // initializing state
    this.state = {
      counter: 0
    }
  }

  btnPressed = () => {
    // reading from state
    let counter = this.state.counter;

    // modifying state
    this.setState({
      counter: counter + 1
    })

  }
  
  render() {
  
    let aCount = this.state.counter
    return (
      <div className="App">
        <p>{aCount}</p>
        <button onClick={this.btnPressed}>Click Me!</button>
      </div>
    )
  }
}

export default App;
