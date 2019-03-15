import React, { Component } from 'react';
import Lunch from './Taco'

class Tacos extends Component {
    render() {
        const flavors = ['Guacamole', 'Beef', 'Bean', 'Chicken'];
        const flavorList = flavors.map((flavor, i) =>{
          return(
            <Lunch key={i} flavor={flavor}/>
          )
        })
        return (
      <div>
        {flavorList}
      </div>
    )
    }
}

export default Tacos;