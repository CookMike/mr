import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 47,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(
      (prevState, prevProps) => ({
        meaningOfLife: prevState.meaningOfLife + prevProps.increment,
      }),
      () => console.log(this.state.meaningOfLife)
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.handleClick}>Change State</button>
        </header>
      </div>
    );
  }
}
export default App;
