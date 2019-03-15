import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Click the login link to view your profile page.</h3>
                    <Link to='/login'>Login</Link>
                    <br/>
                    {/* Removed the below content which takes the Profile link off the login page.
                    Users can only access the Profile page after they have logged in and get redirected. */}
                    {/* <Link to='/profile'>Profile</Link> */}
                    
                </div>
            </div>

                );
            }
        }
        
export default Home;