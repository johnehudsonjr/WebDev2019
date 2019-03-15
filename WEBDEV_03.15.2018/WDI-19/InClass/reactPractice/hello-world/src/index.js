import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    render () {
      return (
        <div>
          <h1>This is a title: {this.props.title}</h1>
          <h3>This is a subtitle: {this.props.subtitle} </h3>
          <p>{this.props.leaf}</p>
          <img src={this.props.image}></img>
          <Button prac ="tester" />
        </div>
      )
    }
  }

  class Button extends Component {
      render() {
          return(
            <div>  
                
                <h6> This is in the Button class: {this.props.name}</h6>
                <button>Tester:{this.props.prac}</button>
            </div>
          )
        
      }
  }

ReactDOM.render(
    <div>
        <Title title="FunnyBone" subtitle= "go off" leaf="win win" image="https://www.seriouseats.com/2018/04/20180309-french-fries-vicky-wasik-15-750x563.jpg"/>
        <Button name="Joyhnn" prac="test"/>
  
    </div>,

  document.body
);