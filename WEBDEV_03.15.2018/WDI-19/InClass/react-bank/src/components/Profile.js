import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div>
        
                <h1> Welcome {this.props.userName}!</h1>
                <p> Your account balance is {this.props.accountBalance}.</p>
                <p> DEBITS GO HERE</p>
                <form>
                    <input type="text" placeholder=" Description"/>
                    <input type="Number" placeholder=" Amount"/>
                    <button type="submit">Submit</button>
                </form>
                <p> Click the link below to view Debits </p>
                <Link to= '/debits'>View Debits</Link>
                <br></br>
                <br></br>
                <Link to= '/home'> Home</Link>
            </div>
        );
    }
}

export default Profile;