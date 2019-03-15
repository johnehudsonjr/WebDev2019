import React, { Component } from 'react';

class Taco extends Component {
    render() {
        let opinion;
        if (this.props.flavor === 'Guacamole'){
            opinion= "LOVE"
        }
        else{
            opinion= "like"
        }
        return <h1>I {opinion} - {this.props.flavor} tacos!</h1>
}
}

export default Taco;