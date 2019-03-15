import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

class Login extends Component {
    state ={
        accountBalance:4550000,
        user:{
          userName:"",
          password: ""
        },
        redirect:false
      }

      handleChange = (event) => {
          let newUser = {...this.state.user}

        //   This will t it to the onChange
        const name = event.target.name
        const value = event.target.value

        // NEED TO REVIEW WHAT HAPPENS HERE
        newUser[name]=value
        
        // Set it
        this.setState({user:newUser})

      };

      handleSubmit = event => {
          event.preventDefault()
          this.props.updateUser(this.state.user)
          this.setState({redirect: true})
      };

   render() {

        if(this.state.redirect){
            return <Redirect to='/profile'/>
        }

       return (
           <div>

               <p>New User: {this.state.userName}</p>

               <form onSubmit= {this.handleSubmit}>
                   <label htmlFor ="userName"></label>
                   <input type = "text" name="userName" onChange={this.handleChange}/>
                  
                   <label htmlFor ="password"></label>
                   <input type = "text" name="password" onChange={this.handleChange}/>
                  
                   <button type = "submit">Login</button>
               </form>

               <Link to = '/home'>Home</Link>
           </div>
       );
   }
}

export default Login;