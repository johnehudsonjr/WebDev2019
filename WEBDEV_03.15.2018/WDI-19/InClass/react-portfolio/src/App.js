import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import Button from './components/Button'
import Specialties from './components/Specialties'
import Taco from './components/Taco'
import Tacos from './components/Tacos'

class App extends Component {
  render() {
    return (
      <div>
        <Tacos/>
      </div>
    );
  }
}

export default App;
