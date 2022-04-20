import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = { numerals: true };

  toggle = () => {
    const romanNumerals = this.state.numerals;
    this.setState({ numerals: !romanNumerals });
  };

  render() {
    let array = [
      "1",
      <br />,
      "2",
      <br />,
      "3",
      <br />,
      "4",
      <br />,
      "5",
      <br />,
      "6",
      <br />,
      "7",
      <br />,
      "8",
      <br />,
      "9",
      <br />,
      "10"
    ];
    if (this.state.numerals) {
      array = [
        "I",
        <br />,
        "II",
        <br />,
        "III",
        <br />,
        "IV",
        <br />,
        "V",
        <br />,
        "VI",
        <br />,
        "VII",
        <br />,
        "VIII",
        <br />,
        "IX",
        <br />,
        "X"
      ];
    }
    return (
      <div className="App">
        <h1>Number Transformation</h1>
        <h2>{array}</h2>
        <button onClick={this.toggle}>Transform</button>
      </div>
    );
  }
}

export default App;
