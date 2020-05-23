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
        return (
            <header className="landing-header">
                <h1 className="landing-h1">Intro-Me</h1>
                <a href="#">ACCOUNT</a>
            </header>
        )
    }
}

export default Navbar;