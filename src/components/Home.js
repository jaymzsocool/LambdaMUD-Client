import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {  
    render() {
        return (
            <div className="home-wrap">
                <div className="home-box">
                    <h1 className="home-title">The Great Adventure</h1>   
                    <div className="home-links">
                        <Link to = '/register'><button type= "button">Register</button></Link>
                        <Link to = '/login'><button type= "button">Login</button></Link>
                    </div> 
                </div>
            </div>            
        );
    }
}

export default Home;