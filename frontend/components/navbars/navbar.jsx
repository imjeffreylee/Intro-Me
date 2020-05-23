import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut({ logout }) {
        this.props.logout();
    }

    render() {
        let button = (
            <div>
                <a href="#" className="account-btn navbar-btn">ACCOUNT</a>
                <a href="#" className="logout-btn navbar-btn">LOG OUT</a>
            </div>
        );

        if (!this.props.user) {
            button = (
                <Link to="/login" className="navbar-btn">LOGIN</Link>
            )
        }
        
        return (
            <header className="landing-header">
                <Link to="/" className="landing-h1">Intro-Me</Link>
                {button}
            </header>
        )
    }
}

export default Navbar;