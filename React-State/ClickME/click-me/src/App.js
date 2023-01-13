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

  // event handler which changes our state
  btnPressedAdd = () => {
    // reading from state
    let counter = this.state.counter;

    // modifying state
    this.setState({
      counter: counter + 1
    })

  }

  btnPressedMinus = () => {
    let counter = this.state.counter
    this.setState({
      counter: counter - 1
    })
  }
  
  render() {
    let {counter} = this.state

    return (
      <div className="App">
        <p>{counter}</p>
        <button onClick={this.btnPressedAdd}>Plus +1</button>
        <button onClick={this.btnPressedMinus}>Minus -1</button>
      </div>
    )
  }
}

export default App;
