import React, { Component } from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Ford", model: "Mustang", color: "red", year: 1999 };
  }
  changeColor = () => {
    if (this.state.color == "blue") {
      this.setState({ color: "red" });
    } else this.setState({ color: "blue" });
  };

  render() {
    return (
      <div>
        <h1>
          My Car is a <mark>{this.state.brand}</mark> brand, from year{" "}
          <i>{this.state.year}</i>. The color is <code>{this.state.color}</code>
        </h1>
        <button type="button" onClick={this.changeColor} value="change">
          Change
        </button>
      </div>
    );
  }
}

export default Car;
