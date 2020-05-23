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
            <div className="account-logout-btn">
                <a href="#" className="account-btn">ACCOUNT</a>
                <a href="#" className="logout-btn">LOG OUT</a>
            </div>
        );

        if (!this.props.user) {
            button = (
                <a href="#">LOG IN</a>
            )
        }

        return (
            <header className="landing-header">
                <h1 className="landing-h1">Intro-Me</h1>
                {button}
            </header>
        )
    }
}

export default Navbar;