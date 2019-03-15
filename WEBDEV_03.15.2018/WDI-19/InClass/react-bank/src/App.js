import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Debits from './components/Debits'

class App extends Component {

    state ={
      accountBalance:300000,
      user:{
        userName:"Stan",
        password: "banana"
      },
    }

updateUser = (something) => {
  // Take it
    let newUser = {...this.state.user}

  // Modify it
    newUser = something

  // Put it Back
  this.setState({user:newUser})
}



  render() {

    const ProfileComponent = () => {
      return(<Profile accountBalance = {this.state.accountBalance} 
                      userName = {this.state.user.userName}/>)
    }

    const LoginComponent = () =>{
      return(<Login
      updateUser={this.updateUser}
      />)
    }

    return (
      <Router>
        <div>
          <img height="100px"src="https://www.pngrepo.com/download/55407/bank-building-silhouette.png" alt="pic" />
          <p>Hello World!</p>
          <Home />

          <Switch>
              <Route  exact path="/profile" render={ProfileComponent}/>
              <Route  exact path="/login" render={LoginComponent}/>
              <Route exact path ="/debits" component={Debits}/>

              {/* <Route  exact path="/home" component={Home}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
