import React, { Component } from 'react';
import './App.css';
import styled from {}

class App extends Component {

  state = {
    hover: false
    click: false
  
  }
  buttonClick = () =>{
    this.setState({click: true})
  }
  
  buttonHover = () =>{
    this.setState({hover: true})
  }
  buttonHoverLeave = () =>{
    this.setState({hover: false})
  }


  render() {
// PLACE THE BUTTON STYLE CONST HERE
    const buttonStyles = {
      borderRadius: "5px",
      padding: "15px 25px",
      fontSize: "22px",
      textDecoration: "none",
      margin: "20px",
      color: "#fff",
      position: "relative",
      display: "inline-block",
      backgroundColor: this.state.hover ? "orange" : "red",
      transform: this.state.click ? "translate(0px, 5px)" : null,
      box-shadow: this.state.click ? "0px 1px 0px 0px" : "0px 5px 0px 0px #3C93D5"
    };

// IN-LINE STYLING GOES {buttonStyles}
    return (
      <div className="App">
        <button onClick= {this.buttonClick} onMouseEnter={this.buttonHover} onMouseLeave= {this.buttonHoverLeave} style={buttonStyles}>Click Me</button>
      </div>
    );
  }
}

export default App;
