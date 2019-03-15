import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Debits extends Component {

    
    
    render() {
        return (
            <div>
                <h4>Your Debits are Listed Below</h4>
                

                <Link to='/profile'>Profile</Link>
            </div>
        );
    }
}

export default Debits;